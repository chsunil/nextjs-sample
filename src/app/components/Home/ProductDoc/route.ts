import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import fs from "fs/promises";
import path from "path";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return new NextResponse("URL parameter is required", { status: 400 });
  }

  try {
    const domain = new URL(url).hostname;
    const screenshotDir = path.join(process.cwd(), "public", "screenshots");
    const screenshotPath = path.join(screenshotDir, `${domain}.png`);

    // Create directory if it doesn't exist
    await fs.mkdir(screenshotDir, { recursive: true });

    // Check if the screenshot already exists and is recent
    try {
      const stats = await fs.stat(screenshotPath);
      // Optional: Re-generate if older than a day
      const oneDay = 24 * 60 * 60 * 1000;
      if (Date.now() - stats.mtime.getTime() < oneDay) {
        const imageBuffer = await fs.readFile(screenshotPath);
        return new NextResponse(imageBuffer, {
          headers: { "Content-Type": "image/png" },
        });
      }
    } catch (error) {
      // File doesn't exist, so we'll generate it
    }

    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(url, { waitUntil: "networkidle2" });
    const imageBuffer = await page.screenshot({ type: "png" });
    await browser.close();

    // Save the new screenshot
    await fs.writeFile(screenshotPath, imageBuffer);

    return new NextResponse(imageBuffer, {
      headers: { "Content-Type": "image/png" },
    });
  } catch (error) {
    console.error("Failed to generate screenshot:", error);
    return new NextResponse("Failed to generate screenshot", { status: 500 });
  }
}
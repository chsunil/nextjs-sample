import React from "react";
import { Metadata } from "next";
import Hero from "@/app/components/Home/Hero";
import Services from "@/app/components/Home/Services";
import Features from "@/app/components/Home/Features";
import ProductDoc from "@/app/components/Home/ProductDoc";
import Plan from "@/app/components/Home/Plans";
import FAQ from "@/app/components/Home/FAQ";
import Info from "@/app/components/Home/Info";
import Partners from "@/app/components/Home/Partner";

export const metadata: Metadata = {
  title: "Sunil",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Features />
      <ProductDoc />
      {/* <Plan /> */}
      <FAQ />
      <Info />
      <Partners />
    </main>
  );
}

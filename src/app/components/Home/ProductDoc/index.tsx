"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleDoc from "./SingleDoc";

const ProductDoc = () => {
  const [DocText, setDocText] = useState<any[]>([])
  const [Portfolio, setPortfolio] = useState<any[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setDocText(data.DocText || [])
        setPortfolio(data.Portfolio || [])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-blue relative bg-[url(/images/productdoc/portfolio-backoverlay.svg)] bg-center bg-no-repeat bg-contain">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="">
          <p className="text-lg text-primary sm:text-start text-center">Product Docs</p>
          <div className="flex sm:flex-row flex-col sm:gap-0 gap-6 justify-between items-center mt-1.875">
            <h3 className="text-white md:text-6xl sm:text-40 text-3xl font-semibold">
              Beautiful Docs
              <br />
              for your APIs.
            </h3>
            <Link
              href="/portfolio"
              className="px-2.188 py-1.125 bg-primary rounded-lg text-white text-lg font-semibold hover:bg-orange-600 duration-500"
            >
              Open Portfolio
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-12 pt-17 gap-x-6 gap-y-8 lg:pb-20 pb-10">
          {DocText.map((item, index) => (
            <SingleDoc key={index} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>
        <Slider {...settings}>
          {Portfolio.map((item, index) => (
            <div key={index} className="px-3">
              <Image
                src={item.image}
                alt="portfolio"
                width={600}
                height={400}
                className="w-full h-full rounded-2xl overflow-hidden"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductDoc;

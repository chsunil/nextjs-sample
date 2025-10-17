"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Icon } from "@iconify/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UsedTech = () => {
  const [Technologies, setTechnologies] = useState<any[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setTechnologies(data.Technologies || [])
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
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="dark:bg-darkmode">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <h4 className="font-semibold md:text-40 text-32 text-black dark:text-white lg:text-start text-center">
          Used <span className="text-primary">Technology</span>
        </h4>
        <div className="mt-6">
          <Slider {...settings}>
            {Technologies.map((item, index) => (
              <div key={index} className="px-3">
                <div className="bg-grey dark:bg-darklight rounded-lg py-3 flex items-center justify-center gap-8 border  dark:border-border_color">
                  <div>
                    <Icon
                      icon={item.base}
                      width="40"
                      height="40"
                      className="font-semibold text-primary mt-2"
                    />
                  </div>
                  <div>
                    <Icon
                      icon="ph:plus-bold"
                      width="28"
                      height="28"
                      className="font-semibold dark:text-white mt-2"
                    />
                  </div>
                  <div>
                    <Icon
                      icon={item.styling}
                      width="40"
                      height="40"
                      className="font-semibold text-primary mt-2"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default UsedTech;

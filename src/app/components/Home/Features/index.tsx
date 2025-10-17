"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Features = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const leftAnimation = {
    animate: inView ? { x: 0, opacity: 1 } : { x: "-10%", opacity: 0 },
    transition: { duration: 1, delay: 0.8 },
  };
  const rightAnimation = {
    animate: inView ? { x: 0, opacity: 1 } : { x: "10%", opacity: 0 },
    transition: { duration: 1, delay: 0.8 },
  };
  return (
    <section className="bg-grey dark:bg-darklight overflow-x-hidden">
      <div
        ref={ref}
        className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4"
      >
        <div className="grid grid-cols-12 xl:gap-24 gap-6 gap-y-11 items-center">
          <div className="lg:col-span-6 col-span-12 px-3">
            <motion.div {...leftAnimation}>
              <Image
                src="/images/services/our-service.webp"
                alt="services"
                width={550}
                height={450}
                className="w-full h-full"
              />
            </motion.div>
          </div>
          <div className="lg:col-span-6 col-span-12 px-3">
            <motion.div {...rightAnimation}>
              <p className="dark:text-white/50 text-black/50 text-lg pb-8 mb-0">
                Why Choose Us
              </p>
              <h3 className="md:text-6xl sm:text-40 text-3xl font-semibold text-dark dark:text-white pb-8">
                Top Features That Set Us Apart
              </h3>
              <ul>
                <li className="flex gap-2 items-center pb-6">
                  <span>
                    <Icon
                      icon="tabler:circle-check"
                      width="25"
                      height="25"
                      className="font-semibold text-success"
                    />
                  </span>
                  <p className="text-lg text-black/50 dark:text-white/50">
                    Effortless User Management and Access Control
                  </p>
                </li>
                <li className="flex gap-2 items-center pb-6">
                  <span>
                    <Icon
                      icon="tabler:circle-check"
                      width="25"
                      height="25"
                      className="font-semibold text-success"
                    />
                  </span>
                  <p className="text-lg dark:text-white/50 text-black/50 ">
                    Effortless Multi-Platform Deployment for Growth
                  </p>
                </li>
                <li className="flex gap-2 items-center pb-6">
                  <span>
                    <Icon
                      icon="tabler:circle-check"
                      width="25"
                      height="25"
                      className="font-semibold text-success"
                    />
                  </span>
                  <p className="text-lg dark:text-white/50 text-black/50 ">
                    SEO Optimization for Higher Search Rankings
                  </p>
                </li>
                <li className="flex gap-2 items-center">
                  <span>
                    <Icon
                      icon="tabler:circle-check"
                      width="25"
                      height="25"
                      className="font-semibold text-success"
                    />
                  </span>
                  <p className="text-lg dark:text-white/50 text-black/50 ">
                    Reliable 24/7 Customer Support for You
                  </p>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/services"
                  className="py-1.125 px-2.188 bg-primary rounded-lg hover:bg-orange-600 duration-300 text-white font-semibold block w-fit"
                >
                  All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

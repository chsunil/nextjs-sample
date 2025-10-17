import React, { FC } from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import { BreadcrumbLink } from "@/app/types/breadcrumb";

interface HeroSubProps {
  title: string;
  description: string;
  breadcrumbLinks: BreadcrumbLink[];
}

const HeroSub: FC<HeroSubProps> = ({ title, description, breadcrumbLinks }) => {
  return (
    <section className="lg:pt-9.375! pt-24! lg:pb-16! pb-0! relative before:content-[''] before:absolute lg:before:h-full before:h-1/5 before:bg-no-repeat before:-z-1 before:bg-[url('/images/hero/right-background.svg')] before:bg-cover before:right-0 lg:before:top-0 before:bottom-0 lg:before:w-40% before:w-full before:z-0 after:content-[''] after:absolute after:-z-1 after:bg-grey dark:after:bg-darklight after:h-full lg:after:w-60%  after:w-full after:left-0 after:top-0">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 relative z-10">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-7 col-span-12">
            <h2 className="dark:text-white md:text-6xl text-4xl font-bold text-black">
              {title}
            </h2>
            <p className="md:text-xl text-lg text-black/50 dark:text-white/50 font-medium my-8">
              {description}
            </p>
          </div>
          <div className="lg:col-span-5 col-span-12 flex-auto flex items-center lg:justify-end z-0">
            <Breadcrumb links={breadcrumbLinks} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSub;

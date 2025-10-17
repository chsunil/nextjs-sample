import React from "react";
import Link from "next/link";

const Location = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <section className="bg-blue py-24">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-24 gap-4 border-b border-solid border-white/30 pb-11">
            <div>
              <h2 className="text-white text-4xl leading-tight font-bold">
                Pune Head Office
              </h2>
            </div>
            <div>
              <p className="text-lg font-normal leading-10 text-white/50">
                4292 Mapleview Drive Greenfield Zip code 38230
              </p>
            </div>
            <div>
              <Link
                href="mailto:headoffice@sasscandy.com"
                className="text-lg text-white font-medium underline hover:text-white/80"
              >
                headoffice@sasscandy.com
              </Link>
              <Link
                href="tel:731-621-5503"
                className="text-lg text-white/80 flex items-center gap-2 hover:text-white w-fit"
              >
                <span className="text-white/40">Call :</span>731-621-5503
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-24 gap-4 pt-12">
            <div>
              <h2 className="text-white text-3xl leading-tight font-bold">
                Bengaluru Office
              </h2>
            </div>
            <div>
              <p className="text-lg text-white/50 font-normal leading-10">
                3502 Marcus Street Geraldine Zip code 35974
              </p>
            </div>
            <div>
              <Link
                href="mailto:Office@sasscandy.com"
                className="text-lg text-white hover:text-white/80 font-medium underline"
              >
                Office@sasscandy.com
              </Link>
              <Link
                href="tel:731-235-7993"
                className="text-lg text-white/80 hover:text-white flex items-center gap-2 hover:text-opacity-100 w-fit"
              >
                <span className="text-white/40">Call :</span>731-235-7993
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;

"use client";
import { useState, useEffect } from "react";
import SingleService from "../../Home/Services/SingleService";
import SkeletonCard from "../../Skeleton/ServiceCard/page";

const ServicesCard = () => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/service");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setServices(data.ServicesData || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="dark:bg-darkmode bg-[url('/images/plan/price-plan-background-icons.svg')] bg-auto bg-center bg-no-repeat">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="mb-17">
          <h3 className="font-semibold lg:text-6xl sm:text-5xl text-3xl text-black dark:text-white text-center">
            Innovative Apps for <br /> Your Business Needs
          </h3>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
            : services.map((item, index) => <SingleService key={index} service={item} />)
          }
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;

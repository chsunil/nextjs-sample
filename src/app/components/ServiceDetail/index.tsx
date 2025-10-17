"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import HeroSub from "@/app/components/SharedComponent/HeroSub";
import UsedTech from "@/app/components/Services/Technologies";
import ServiceDetailSkeleton from "../Skeleton/ServiceDetail/page";

const ServiceDetail = () => {
    const [services, setServices] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/service')
                if (!res.ok) throw new Error('Failed to fetch')

                const data = await res.json()
                setServices(data.ServicesData || [])
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }

        fetchData()
    }, [])
    const { slug } = useParams();
    const item = services.find((item) => item.slug === slug);
    const breadcrumbLinks = [
        { href: "/services", text: "Service" },
        { href: "/services", text: "Services Detail" },
    ];

    if (!item) {
        return (
            <ServiceDetailSkeleton />
        );
    }

    return (
        <>
            <HeroSub
                title={item.title}
                description={item.description}
                breadcrumbLinks={breadcrumbLinks}
            />
            <section className="dark:bg-darkmode">
                <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
                    <div className="grid lg:grid-cols-2 items-center">
                        <div className="mx-auto">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={480}
                                height={480}
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold md:text-5xl text-32 text-black dark:text-white lg:text-start text-center mb-4">
                                What It <span className="text-primary">Does</span>
                            </h3>
                            <p className="text-xl text-black/50 dark:text-white/50">
                                {item.detail}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-grey dark:bg-darklight">
                <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
                    <h4 className="font-semibold md:text-40 text-32 text-black dark:text-white lg:text-start text-center">
                        Features
                    </h4>
                    <ul className="mt-4 text-xl">
                        {item.features.map((feature: any, index: any) => (
                            <li
                                key={index}
                                className="my-3"
                            >
                                <div className="flex items-start sm:gap-5 gap-3">
                                    <div>
                                        <Icon
                                            icon="solar:check-circle-linear"
                                            width="18"
                                            height="18"
                                            className="font-semibold text-primary mt-2 w-4 h-4"
                                        />
                                    </div>
                                    <p className="text-xl text-black/50 dark:text-white/50">
                                        <span className="font-medium text-black dark:text-white">
                                            {feature.title}:
                                        </span>{" "}
                                        {feature.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <UsedTech />
        </>
    );
};

export default ServiceDetail;
import React from "react";
import ServiceDetail from "@/app/components/ServiceDetail";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: any) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/service`, {
      cache: "no-store",
    });
    const data = await res.json();

    const service = data.ServicesData.find((item: any) => item.slug === params.slug);

    if (!service) {
      return {
        title: "Service Not Found",
        description: "The requested service could not be found.",
      };
    }

    return {
      title: `${service.title} | SassCandy`,
      description: service.description,
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  } catch (err) {
    return {
      title: "Data Not Fetched",
      description: "An error occurred while loading this service.",
    };
  }
}

const Page = () => {

  return (
    <ServiceDetail />
  );
};

export default Page;
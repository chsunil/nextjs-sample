import HeroSub from "@/app/components/SharedComponent/HeroSub";
import ProductDoc from "@/app/components/Home/ProductDoc";
import Features from "@/app/components/Home/Features";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pricing | SassCandy",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/portfolio", text: "Portfolio" },
  ];
  return (
    <>
      <HeroSub
        title="Portfolio"
        description="Select the ideal plan for your business. From startups to scaling enterprises, we have the perfect solution to support your growth."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Features />
      <ProductDoc />
    </>
  );
};

export default page;

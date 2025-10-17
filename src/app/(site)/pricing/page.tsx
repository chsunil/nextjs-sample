import HeroSub from "@/app/components/SharedComponent/HeroSub";
import Plan from "@/app/components/Home/Plans";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pricing | SassCandy",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/pricing", text: "Pricing" },
  ];
  return (
    <>
      <HeroSub
        title="Pricing"
        description="Choose the perfect plan that fits your needs. Whether you're just getting started or scaling up, we’ve got you covered."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Plan />
    </>
  );
};

export default page;

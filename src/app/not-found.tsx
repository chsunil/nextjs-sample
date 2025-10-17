import NotFound from "@/app/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page | Saturn ",
};

const ErrorPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "javascript:void(0)", text: "404" },
  ];
  return (
    <>
      <NotFound />
    </>
  );
};

export default ErrorPage;

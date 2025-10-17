import Signin from "@/app/components/Auth/SignIn";
import Breadcrumb from "@/app/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign In | Saturn",
};

const SigninPage = () => {
  return (
    <div className="pt-32 sm:pt-56 pb-10 px-4 bg-grey dark:bg-darkmode">
      <div className="container mx-auto max-w-lg overflow-hidden rounded-lg bg-white dark:bg-darklight text-center px-8 py-14 sm:px-12 md:px-16">
        <Signin />
      </div>
    </div>
  );
};

export default SigninPage;

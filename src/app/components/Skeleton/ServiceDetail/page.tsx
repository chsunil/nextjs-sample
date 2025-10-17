import UsedTech from "../../Services/Technologies"
import Breadcrumb from "../../Breadcrumb"

const breadcrumbLinks = [
    { href: "/services", text: "Service" },
    { href: "/services", text: "Services Detail" },
];

const ServiceDetailSkeleton = () => {
    return (
        <>
            <section className="lg:pt-9.375! pt-24! lg:pb-16! pb-0! relative before:content-[''] before:absolute lg:before:h-full before:h-1/5 before:bg-no-repeat before:-z-1 before:bg-[url('/images/hero/right-background.svg')] before:bg-cover before:right-0 lg:before:top-0 before:bottom-0 lg:before:w-40% before:w-full after:content-[''] after:absolute after:-z-1 after:bg-grey dark:after:bg-darklight after:h-full lg:after:w-60%  after:w-full after:left-0 after:top-0">
                <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 relative z-10">
                    <div className="grid grid-cols-12">
                        <div className="lg:col-span-7 col-span-12 flex flex-col gap-3">
                            <div className="h-8 bg-gray-300 rounded w-2/3"></div>
                            <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                        </div>
                        <div className="lg:col-span-5 col-span-12 flex-auto flex items-center lg:justify-end z-0">
                            <Breadcrumb links={breadcrumbLinks} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="dark:bg-darkmode">
                <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
                    <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                        <div className="flex items-center justify-center w-full h-96 bg-gray-300 rounded-sm dark:bg-gray-700">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div className="w-full">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </section>
            <section className="bg-grey dark:bg-darklight">
                <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
                    <h4 className="font-semibold md:text-40 text-32 text-black dark:text-white lg:text-start text-center">
                        Features
                    </h4>
                    <ul className="mt-4 text-xl">
                        <li className="my-3" >
                            <div className="flex flex-col items-start sm:gap-5 gap-3">
                                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <UsedTech />
        </>
    )
}

export default ServiceDetailSkeleton
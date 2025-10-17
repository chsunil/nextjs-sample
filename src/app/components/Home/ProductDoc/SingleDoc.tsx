import { Icon } from "@iconify/react";

type Doctype = {
    icon: string
    title: string
    text: string
}

const SingleDoc = ({ icon, title, text }: Doctype) => {
    return (
        <div
            className="lg:col-span-4 sm:col-span-6 col-span-12"
        >
            <div className="border border-Snowy-sky md:px-15 md:py-3.438 p-8 rounded-2xl text-center lg:mb-0">
                <div className="rounded-full flex justify-center w-20 h-20 items-center mx-auto bg-Snowy-sky">
                    <span className="relative z-1">
                        <Icon
                            icon={icon}
                            width="35"
                            height="35"
                            className="font-semibold text-white"
                        />
                    </span>
                </div>
                <h3 className="py-4 text-24 font-semibold text-white dark:text-white">
                    {title}
                </h3>
                <p className="text-lg font-medium text-white/50">{text}</p>
            </div>
        </div>
    )
}
export default SingleDoc;
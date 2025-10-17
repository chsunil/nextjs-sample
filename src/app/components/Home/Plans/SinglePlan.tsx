import SingleFeature from "./SingleFeature";
import { Icon } from "@iconify/react";

type planstype = {
    type: string;
    price: number;
    text: string;
    benefits: string[]
}

interface SinglePlanProps {
    plan: planstype;
    onSelect: (plan: planstype) => void;
}

const SinglePlan = ({ plan, onSelect }: SinglePlanProps) => {
    const { type, price, text, benefits } = plan;
    return (
        <div className="xl:col-span-4 md:col-span-6 col-span-12" >
            <div className="shadow-card-shadow relative h-full sm:px-15 px-6 sm:pt-3.438 sm:pb-12 sm:py-0 py-9 rounded-3xl before:content-[''] before:absolute before:w-full before:h-11.563 before:bg-contain before:bg-center before:bg-no-repeat before:bg-[url('/images/plan/price-overlay.svg')] dark:before:bg-[url('/images/plan/price-overlay-dark.svg')] before:top-20% before:right-0 bg-white dark:bg-darklight z-1 flex flex-col justify-between lg:mb-0 mb-1.875">
                <div className="">
                    <p className="text-primary text-lg font-semibold">
                        {type}
                    </p>
                    <h3 className="relative mb-6">
                        <sub className="text-65 font-semibold text-black dark:text-white">
                            {price}
                        </sub>
                        <sup className="text-xl font-semibold text-black/50 dark:text-white/50 absolute top-6">
                            $
                        </sup>
                    </h3>
                    <p className="text-black/50 dark:text-white/50 text-lg mb-4 pb-4">
                        {text}
                    </p>
                    <ul className="pb-6">
                        {benefits.map((benefit: any, benefitIndex: any) => (
                            <SingleFeature key={benefitIndex} text={benefit} />
                        ))}
                    </ul>
                </div>
                <button
                    onClick={() => onSelect(plan)}
                    className="px-2.188 py-1.125 bg-primary rounded-lg cursor-pointer text-white text-base hover:bg-orange-600 duration-500"
                >
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default SinglePlan;
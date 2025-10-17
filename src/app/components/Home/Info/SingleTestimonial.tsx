import Image from "next/image";

type testimonialtype = {
    review: string
    image: string
    name: string
    post: string
}

const SingleTestimonial = ({ review, image, name, post }: testimonialtype) => {
    return (
        <div className="pt-3.125 sm:pe-9.375">
            <p className='text-22 relative font-light text-white/50 mb-6 before:content-[""] before:absolute before:w-3.125 before:h-3.125 before:-top-6 before:left-0 before:bg-no-repeat before:bg-[url("/images/info/quotes.svg")] before:bg-contain'>
                {review}
            </p>
            <div className="flex">
                <div className="">
                    <Image
                        src={image}
                        alt="user"
                        width={55}
                        height={55}
                        className="rounded-full w-3.438 h-3.438"
                    />
                </div>
                <div className="ms-4">
                    <h5 className="text-base font-medium text-white dark:text-white mb-2">
                        {name}
                    </h5>
                    <p className="text-white/50 text-sm">
                        {post}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleTestimonial;
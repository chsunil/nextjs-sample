import { Icon } from "@iconify/react";

const SingleFeature = ({ text }: { text: string }) => {
    return (
        <li className="text-black dark:text-white text-lg text-start pb-1.125 flex items-center gap-2" >
            <span>
                <Icon
                    icon="tabler:circle-check"
                    width="25"
                    height="25"
                    className="font-semibold text-success"
                />
            </span>
            {text}
        </li>
    )
}

export default SingleFeature;
import { NextResponse } from 'next/server'

const Technologies = [
    {
        base: "devicon:angular",
        styling: "devicon:tailwindcss",
    },
    {
        base: "devicon:html5",
        styling: "devicon:bootstrap",
    },
    {
        base: "devicon:react",
        styling: "devicon:materialui",
    },
    {
        base: "devicon:html5",
        styling: "devicon:tailwindcss",
    },
    {
        base: "devicon:react",
        styling: "devicon:tailwindcss",
    },
    {
        base: "devicon:nextjs",
        styling: "devicon:materialui",
    },
    {
        base: "devicon:react",
        styling: "devicon:bootstrap",
    },
    {
        base: "devicon:nextjs",
        styling: "devicon:tailwindcss",
    },
    {
        base: "devicon:angular",
        styling: "devicon:materialui",
    },
    {
        base: "devicon:nextjs",
        styling: "devicon:bootstrap",
    },
    {
        base: "devicon:angular",
        styling: "devicon:bootstrap",
    },
];

const DocText = [
    {
        icon: "tabler:brand-github",
        title: "Github Sync",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        icon: "tabler:crown",
        title: "Branding",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        icon: "tabler:message-circle",
        title: "Comments",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
];

const Portfolio = [
    {
        image: "/images/productdoc/Portfolio-1.jpg",
    },
    {
        image: "/images/productdoc/Portfolio-2.jpg",
    },
    {
        image: "/images/productdoc/Portfolio-3.jpg",
    },
    {
        image: "/images/productdoc/Portfolio-4.jpg",
    },
    {
        image: "/images/productdoc/Portfolio-5.jpg",
    },
];

const MonthlyPlans = [
    {
        type: "Personal",
        price: 19,
        text: "For individuals looking for a simple CRM solution",
        benefits: [
            "Basic CRM features",
            "Unlimited Personal Pipelines",
            "Email Power Tools",
        ],
    },
    {
        type: "Professional",
        price: 49,
        text: "For individuals looking for a simple CRM solution",
        benefits: [
            "Basic CRM features",
            "Unlimited Personal Pipelines",
            "Email Power Tools",
            "Unlimited Shared Pipelines",
        ],
    },
    {
        type: "Enterprise",
        price: 99,
        text: "For individuals looking for a simple CRM solution",
        benefits: [
            "Basic CRM features",
            "Unlimited Personal Pipelines",
            "Email Power Tools",
            "Unlimited Shared Pipelines",
            "Full API Access",
        ],
    },
];

const yearlyPlans = [
    {
        type: "Personal",
        price: 149,
        text: "For individuals looking for a simple CRM solution",
        benefits: [
            "Basic CRM features",
            "Unlimited Personal Pipelines",
            "Email Power Tools",
        ],
    },
    {
        type: "Professional",
        price: 299,
        text: "For individuals looking for a simple CRM solution",
        benefits: [
            "Basic CRM features",
            "Unlimited Personal Pipelines",
            "Email Power Tools",
            "Unlimited Shared Pipelines",
        ],
    },
    {
        type: "Enterprise",
        price: 599,
        text: "For individuals looking for a simple CRM solution",
        benefits: [
            "Basic CRM features",
            "Unlimited Personal Pipelines",
            "Email Power Tools",
            "Unlimited Shared Pipelines",
            "Full API Access",
        ],
    },
];

const Questions = [
    {
        question: "Letraset sheets containing sum passages ?",
        answer:
            "Seamlessly see the tasks that need your attention, check when your next meeting is coming up, and keep up with your progress.",
    },
    {
        question: "There are many variations ?",
        answer:
            "Seamlessly see the tasks that need your attention, check when your next meeting is coming up, and keep up with your progress.",
    },
    {
        question: "Lorem Ipsum generators on the Internet tend ?",
        answer:
            "Seamlessly see the tasks that need your attention, check when your next meeting is coming up, and keep up with your progress.",
    },
    {
        question: "Various versions have evolved over the ?",
        answer:
            "Seamlessly see the tasks that need your attention, check when your next meeting is coming up, and keep up with your progress.",
    },
    {
        question: "Finibus bonorum et malorum ?",
        answer:
            "Seamlessly see the tasks that need your attention, check when your next meeting is coming up, and keep up with your progress.",
    },
    {
        question: "Many desktop publishing packages ?",
        answer:
            "Seamlessly see the tasks that need your attention, check when your next meeting is coming up, and keep up with your progress.",
    },
];

const Testimonial = [
    {
        review:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece",
        name: "Merky Lester",
        post: "Manager",
        Image: "/images/profile.png",
    },
    {
        review:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece",
        name: "Merky Lester",
        post: "Manager",
        Image: "/images/profile.png",
    },
    {
        review:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece",
        name: "Merky Lester",
        post: "Manager",
        Image: "/images/profile.png",
    },
];

const partners = [
    {
        image: "/images/info/amazon.svg",
    },
    {
        image: "/images/info/microsoft.svg",
    },
    {
        image: "/images/info/google.svg",
    },
    {
        image: "/images/info/unique.svg",
    },
];

export const GET = () => {
    return NextResponse.json({
        Technologies,
        DocText,
        Portfolio,
        MonthlyPlans,
        yearlyPlans,
        Questions,
        Testimonial,
        partners,
    })
}
import { NextResponse } from 'next/server'

const ServicesData = [
    {
        icon: "solar:notebook-bookmark-linear",
        title: "EdTech Apps",
        slug: "edtech-apps",
        image: "/images/ServiceDetail/EdTechAppImage.png",
        description:
            "Powerful tools that enhance learning experiences with interactive content, virtual classrooms, and performance tracking.",
        detail:
            "Develop comprehensive EdTech applications designed to transform the learning experience for students and educators. These apps offer seamless integration of multimedia tools, course management systems, real-time communication features, and advanced assessment modules. The platform enables instructors to create personalized lesson plans and interactive quizzes, while students can track their progress and engage with educational materials in a dynamic, user-friendly interface. Features such as video and audio integration, real-time feedback, and gamified learning make these apps ideal for modern classrooms and online learning environments.",
        features: [
            {
                title: "Course Management System",
                description:
                    " Manage courses with multimedia support, helping both students and instructors organize and engage in learning materials.",
            },
            {
                title: "Student Profiles & Progress Tracking",
                description:
                    " Track and manage students' progress with personalized learning paths, enabling educators to provide targeted support.",
            },
            {
                title: "Interactive Quizzes & Exams",
                description:
                    " Create and grade interactive quizzes and exams, providing real-time feedback to students.",
            },
            {
                title: "Video & Audio Integration",
                description:
                    " Incorporate multimedia elements like videos and audio for enhanced learning experiences.",
            },
            {
                title: "Real-Time Chat",
                description:
                    " Enable instant communication between students and instructors for better engagement.",
            },
        ],
    },
    {
        icon: "solar:cart-3-linear",
        title: "eCommerce Apps",
        slug: "ecommerce-apps",
        image: "/images/ServiceDetail/eCommerceImage.png",
        description:
            "Seamlessly manage online stores, process payments, and optimize customer experiences to drive sales and conversions.",
        detail:
            "Create robust, scalable eCommerce applications that cater to the growing demands of online retail. These apps offer a wide range of features such as personalized product recommendations, real-time inventory management, and multi-currency payment gateways. With a focus on providing an intuitive user interface, secure checkout processes, and an integrated shipping solution, these apps are designed to enhance the customer experience. Admins can manage product listings, customer orders, and payment processing with ease, while shoppers benefit from a streamlined and efficient purchasing process that includes customer reviews, wishlists, and order tracking.",
        features: [
            {
                title: "Product Catalog",
                description:
                    "Create a dynamic product catalog with advanced search filters and sorting options to improve customer experience.",
            },
            {
                title: "Secure Checkout Process",
                description:
                    "Offer a secure checkout experience with multiple payment gateways for a seamless transaction process.",
            },
            {
                title: "Inventory Management",
                description:
                    "Track inventory in real-time, ensuring stock levels are always accurate and updated.",
            },
            {
                title: "Customer Reviews & Ratings",
                description:
                    "Allow customers to leave reviews and ratings, building trust and influencing purchasing decisions.",
            },
            {
                title: "Admin Dashboard",
                description:
                    "Manage sales, orders, and customer data easily through a centralized admin dashboard.",
            },
        ],
    },
    {
        icon: "solar:video-frame-replace-linear",
        title: "CRM Apps",
        slug: "crm-apps",
        image: "/images/ServiceDetail/CRMAppsImage.png",
        description:
            "Track leads, manage customer data, and boost engagement with smart tools that streamline sales and support workflows.",
        detail:
            "Build powerful CRM and SaaS solutions that provide businesses with tools to efficiently manage customer relationships, streamline sales processes, and enhance team productivity. These applications allow organizations to track customer interactions, automate lead nurturing workflows, and create targeted marketing campaigns. With features like contact management, sales funnel visualization, and custom reporting, businesses can gain deeper insights into their performance and customer behavior. Integration with popular third-party platforms, real-time collaboration tools, and analytics dashboards further empower teams to improve customer satisfaction and optimize sales strategies.",
        features: [
            {
                title: "Client Database & Segmentation",
                description:
                    "Organize clients and prospects into segments for targeted marketing and effective customer management.",
            },
            {
                title: "Sales Pipeline Management",
                description:
                    "Manage leads and opportunities at various stages of the sales pipeline to ensure smooth transitions.",
            },
            {
                title: "Email Marketing & Automation",
                description:
                    "Automate email campaigns and marketing workflows to nurture leads and drive conversions.",
            },
            {
                title: "Third-Party App Integration",
                description:
                    "Integrate with popular tools like Mailchimp and Salesforce to streamline CRM and SaaS processes.",
            },
            {
                title: "Customizable Reports & Dashboards",
                description:
                    "Generate and customize detailed reports and dashboards to monitor business performance.",
            },
        ],
    },
    {
        icon: "solar:stethoscope-linear",
        title: "Health Apps",
        slug: "health-apps",
        image: "/images/ServiceDetail/HealthAppImage.png",
        description:
            "Empower users to monitor health, book appointments, and access care with secure, user-friendly medical tools and features.",
        detail:
            "Create user-friendly and feature-rich health and fitness applications that motivate users to lead healthier lifestyles. These apps provide a holistic approach to fitness by offering workout logs, nutrition tracking, and personalized fitness goals. Users can track their progress through detailed analytics and receive workout recommendations tailored to their fitness levels and objectives. Integration with wearables such as fitness trackers and smartwatches allows for real-time health monitoring, while social features enable users to connect with a community for added motivation. From step tracking to meal planning, these apps provide everything users need to stay on track with their health journey.",
        features: [
            {
                title: "Workout Logging & Progress Tracking",
                description:
                    "Log exercises and monitor progress to help users reach their fitness goals.",
            },
            {
                title: "Nutrition Tracking & Meal Suggestions",
                description:
                    "Track meals and provide personalized meal suggestions based on the user's health goals.",
            },
            {
                title: "Integration with Wearable Devices",
                description:
                    "Sync with wearable devices like Fitbit and Apple Health to gather more fitness data.",
            },
            {
                title: "Social Features & Community Support",
                description:
                    "Engage with others by sharing progress, challenges, and encouraging social interactions.",
            },
            {
                title: "Health Analytics & Reporting",
                description:
                    "Analyze health data over time and provide reports to track long-term fitness progress.",
            },
        ],
    },
    {
        icon: "solar:chart-square-linear",
        title: "Web Analytics Apps",
        slug: "web-analytics-apps",
        image: "/images/ServiceDetail/WebAnalyticsAppsImage.png",
        description:
            "Gain real-time insights into website traffic, user behavior, and performance to optimize digital strategies and ROI.",
        detail:
            "Design highly secure and intuitive banking and finance applications that empower users to manage their personal finances with ease. These apps enable seamless account management, bill payments, fund transfers, and real-time transaction tracking. Users can monitor their financial health with integrated budgeting tools, investment portfolio tracking, and access to financial insights like credit scores, loan applications, and market data. With a focus on security, the apps incorporate features such as two-factor authentication, biometric login, and encryption to ensure the protection of sensitive user data. Additionally, real-time stock updates, cryptocurrency support, and financial goal setting features make these apps ideal for users seeking to manage their finances efficiently.",
        features: [
            {
                title: "Real-Time User Analytics Dashboard",
                description:
                    "Track visitors, their behavior, and website performance metrics in real-time.",
            },
            {
                title: "Customizable Metrics & Filters",
                description:
                    "Filter and customize the data view to gain more specific insights into website performance.",
            },
            {
                title: "Google Analytics & Third-Party Tool Integration",
                description:
                    "Integrate with tools like Google Analytics to enhance tracking and data collection.",
            },
            {
                title: "Traffic Source Tracking",
                description:
                    "Monitor the sources of your website traffic, such as search engines, social media, and paid campaigns.",
            },
            {
                title: "Heatmap Integration",
                description:
                    "Visualize user interactions on pages with heatmaps to better understand behavior and improve design.",
            },
        ],
    },
    {
        icon: "solar:hand-money-linear",
        title: "Banking Apps",
        slug: "banking-apps",
        image: "/images/ServiceDetail/BankingandFinanceImage.png",
        description:
            "Deliver secure, convenient financial services with features for transactions, account management, and fraud protection.",
        detail:
            "Design secure banking and finance apps to manage accounts, transactions, and investments. Key features include transaction tracking, bill payments, investment portfolios, and credit score management. The apps also ensure security with features like two-factor authentication and real-time market data, providing users with a reliable financial management tool.",
        features: [
            {
                title: "Account & Transaction Management",
                description:
                    "Manage financial accounts and track transactions efficiently from a secure interface.",
            },
            {
                title: "Investment Portfolio Tracking",
                description:
                    "Track investments and portfolio performance in real-time with up-to-date market data.",
            },
            {
                title: "Credit Score & Loan Management",
                description:
                    "Monitor credit scores and apply for loans directly through the app with ease.",
            },
            {
                title: "Real-Time Market Data & Stock Updates",
                description:
                    "Get real-time financial market data and stock updates to make informed investment decisions.",
            },
            {
                title: "Security Features",
                description:
                    "Protect user data with advanced security features, including two-factor authentication and encryption.",
            },
        ],
    },
];

export const GET = () => {
    return NextResponse.json({
        ServicesData,
    })
}
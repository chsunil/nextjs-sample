"use client";
import HeroSub from "@/app/components/SharedComponent/HeroSub";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  PortfolioItem,
  WpCategory,
  WpPortfolioItem,
} from "@/types/wordpress";

const page = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
          controller.abort();
        }, 10000); // 10-second timeout

        // 1. Fetch portfolio items and categories from your WordPress site
        const [portfolioRes, categoriesRes] = await Promise.all([
          fetch("https://psd2web.in/wp-json/wp/v2/testimonial?per_page=100", {
            signal: controller.signal,
          }),
          fetch(
            "https://psd2web.in/wp-json/wp/v2/testimonial_category?per_page=100"
          , {
            signal: controller.signal,
          }
          ),
        ]);

        clearTimeout(timeoutId);

        if (!portfolioRes.ok || !categoriesRes.ok) {
          throw new Error(
            "Failed to fetch data from WordPress. Please check the API endpoint."
          );
        }

        const wpPortfolio: WpPortfolioItem[] = await portfolioRes.json();
        const wpCategories: WpCategory[] = await categoriesRes.json();

        // 2. Process the data: Map category IDs to names
        const categoryMap = new Map(
          wpCategories.map((cat) => [cat.id, cat.name])
        );

        const portfolioData: PortfolioItem[] = wpPortfolio.map((item) => ({
          title: item.title.rendered,
          url: item.meta.company_url,
          category:
            categoryMap.get(item.testimonial_category[0]) || "Uncategorized",
        }));

        // 3. Update the component's state with the fetched data
        setPortfolio(portfolioData.reverse()); 

        const uniqueCategories = [
          "All",
          ...new Set(portfolioData.map((item) => item.category)),
        ] as string[];
        setCategories(uniqueCategories);
        
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "An unknown error occurred.";
        console.error("Error fetching portfolio:", errorMessage);
        if (error.name === 'AbortError') {
          setError("The request took too long and was aborted. Please try again.");
        } else {
          setError("Sorry, we couldn't load the portfolio. Please try again later.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
    setCurrentPage(1); // Reset to the first page when filter changes
  };

  const filteredPortfolio =
    activeFilter === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === activeFilter);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPortfolio.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPortfolio.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/portfolio", text: "Portfolio" },
  ];
  return (
    <>
      <HeroSub
        title="Portfolio"
        description="Select the ideal plan for your business. From startups to scaling enterprises, we have the perfect solution to support your growth."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="py-20 lg:py-25">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterClick(category)}
                className={`px-6 py-2 rounded-md text-lg font-semibold transition-colors duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-primary/80 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Conditional Rendering for Loading, Error, and Content */}
          {isLoading ? (
            <div className="text-center text-xl font-semibold">Loading portfolio...</div>
          ) : error ? (
            <div className="text-center text-xl font-semibold text-red-500">{error}</div>
          ) : (
            <>
              {/* Portfolio Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentItems.map((item, index) => (
                  <Link key={`${item.url}-${index}`} href={item.url} target="_blank" rel="noopener noreferrer">
                    <div
                      className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
                    >
                      <Image
                        src={`/api/screenshot?url=${encodeURIComponent(item.url)}`}
                        alt={item.title || "Portfolio Item"}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white text-2xl font-bold">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-16 space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNumber) => (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`px-4 py-2 rounded-md font-semibold ${
                          currentPage === pageNumber
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-primary/80 hover:text-white"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    )
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default page;

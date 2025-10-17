"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import SingleQuestion from "./SingleQuestion";

const FAQ = () => {
  const [Questions, setQuestions] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setQuestions(data.Questions || [])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="bg-grey dark:bg-darklight">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="text-center">
          <p className="text-black/50 dark:text-white/50 text-lg pb-1.875 ">
            Frequently Asked Questions
          </p>
          <h3 className="md:text-6xl sm:text-40 text-3xl font-semibold text-black dark:text-white">
            Want to ask something from us?
          </h3>
        </div>
        <div className="mt-3.125">
          <div className="grid lg:grid-cols-2 grid-cols-1 justify-between">
            {Questions.map((item, index) => (
              <SingleQuestion key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

"use client";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { Icon } from "@iconify/react";
import Logo from "@/app/components/Layout/Header/Logo";
import SinglePlan from "./SinglePlan";

interface Plan {
  type: string;
  price: number;
  text: string;
  benefits: string[];
}

const Plan = () => {
  const [enabled, setEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [MonthlyPlans, setMonthlyPlans] = useState<any[]>([])
  const [yearlyPlans, setyearlyPlans] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setMonthlyPlans(data.MonthlyPlans || [])
        setyearlyPlans(data.yearlyPlans || [])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])

  const plans = enabled ? yearlyPlans : MonthlyPlans;

  const openModal = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <section className="relative bg-contain bg-no-repeat bg-[url('/images/plan/price-plan-background-icons.svg')] bg-center dark:bg-darkmode">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="text-center">
          <p className="text-lg text-black/50 dark:text-white/50 mb-1.875">
            Pricing Plan
          </p>
          <h3 className="md:text-6xl sm:text-40 text-3xl font-semibold text-dark dark:text-white">
            What’s About Our
            <br /> Pricing Subscription
          </h3>
          <div className="mt-17 mb-5">
            <div className="flex justify-center items-center gap-4">
              <label
                htmlFor="switch"
                className="text-lg font-semibold text-black dark:text-white"
              >
                Monthly
              </label>
              <Switch
                checked={enabled}
                id="switch"
                onChange={setEnabled}
                className="group inline-flex h-6 w-3.125 items-center rounded-full border border-black dark:border-white/25 transition data-[checked]:bg-lightyellow data-[checked]:border-transparent"
              >
                <span className="size-4 translate-x-1 rounded-full bg-black dark:bg-white/25 transition group-data-[checked]:translate-x-7 group-data-[checked]:bg-white" />
              </Switch>
              <label
                htmlFor="switch"
                className="text-lg font-semibold text-black dark:text-white"
              >
                Yearly
              </label>
            </div>
          </div>
          <div className="inline-block relative">
            <p className="text-primary font-medium text-sm">Save Up To 58%</p>
            <Icon
              icon="ph:arrow-bend-right-up"
              width="24"
              height="24"
              className="absolute -top-3 -right-1.875"
            />
          </div>
          <div className="grid grid-cols-12 pt-17 sm:gap-1.875 gap-y-1.875">
            {plans.map((item, index) => (
              <SinglePlan key={index} plan={item} onSelect={openModal} />
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50">
          <div className="bg-white dark:bg-darkmode p-6 rounded-lg h-auto max-h-[800px] overflow-y-auto relative">
            <div className="flex items-center mb-10">
              <div className="text-center mx-auto inline-block max-w-40">
                <Logo />
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-5 h-5 absolute right-0 top-0 mr-8 mt-8 text-black/50 dark:text-white/50"
                aria-label="Close Sign Up Modal"
              >
                <Icon icon="ph:x-circle" width="24" height="24" />
              </button>
            </div>

            <div className="z-1 relative my-8 text-center">
              <span className="-z-1 absolute left-0 top-1/2 block h-px w-full bg-stroke dark:bg-border_color"></span>
              <span className="text-body-secondary relative z-10 inline-block bg-white px-3 text-base dark:bg-darkmode">
                Checkout
              </span>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg border border-stroke border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-stroke border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full rounded-lg border border-stroke border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full rounded-lg border border-stroke border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Credit Card Number"
                  className="w-full rounded-lg border border-stroke border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="flex gap-2 mb-6">
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full rounded-lg border border-stroke border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-full rounded-lg border border-stroke border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-6 flex flex-col gap-3">
                <div className="flex justify-between text-xs">
                  <p className="text-base">Plan Type:</p>
                  <p className="text-base font-semibold">{selectedPlan.type}</p>
                </div>
                <div className="flex justify-between text-xs">
                  <p className="text-base">Total Price:</p>
                  <p className="text-base font-semibold">
                    ${selectedPlan.price}
                  </p>
                </div>
              </div>
              <div className="">
                <button
                  type="submit"
                  onClick={closeModal}
                  className="px-5 py-3 w-full rounded-lg bg-primary text-white text-base transition duration-300 ease-in-out hover:bg-orange-600"
                >
                  Complete Purchase
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Plan;

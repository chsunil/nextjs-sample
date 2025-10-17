"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import SingleTestimonial from "./SingleTestimonial";

const Info = () => {
  const [Testimonial, setTestimonial] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setTestimonial(data.Testimonial || [])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])
  const [formData, setFormData] = useState({
    Fname: "",
    Phone: "",
    Mail: "",
    Message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = Object.values(formData).every((value) => value.trim() !== "");
    setIsFormValid(isValid);
  }, [formData]);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const reset = () => {
    formData.Fname = "";
    formData.Phone = "";
    formData.Mail = "";
    formData.Message = "";
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true);

    fetch("https://formsubmit.co/ajax/arshvasani9@gmail.com", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        FullName: formData.Fname,
        PhoneNo: formData.Phone,
        Email: formData.Mail,
        Message: formData.Message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubmitted(true)
          setShowThanks(true);
          reset();

          setTimeout(() => {
            setShowThanks(false);
          }, 5000);
        }

        reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-blue relative bg-no-repeat bg-[url('/images/info/contact-background-layer.svg')] bg-cover">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md relative z-1 px-4">
        <div className="grid grid-cols-12">
          <div className="xl:col-span-5 lg:col-span-6 col-span-12">
            <p className="text-lg font-medium text-primary pb-1.875">
              Join us Now
            </p>
            <h3 className="text-white md:text-6xl sm:text-40 text-3xl font-medium pb-10 border-b border-white/10 ">
              Ready to try the app for free?
            </h3>
            <Slider {...settings}>
              {Testimonial.map((item, index) => (
                <SingleTestimonial key={index} review={item.review} image={item.Image} name={item.name} post={item.post} />
              ))}
            </Slider>
          </div>
          <div className="xl:col-span-7 lg:col-span-6 col-span-12 lg:mt-0 mt-10">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 sm:gap-2.188 gap-4 lg:ml-12">
              <div className="sm:col-span-1 col-span-2">
                <label
                  htmlFor="Fname"
                  className="text-lg font-medium inline-block text-white mb-4"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="Fname"
                  value={formData.Fname}
                  onChange={handleChange}
                  id="Fname"
                  className="px-5 py-4 rounded-lg text-base dark:bg-darkmode dark:text-white outline-none border focus:border-primary focus-visible:shadow-none dark:border-border_color dark:focus:border-primary bg-white placeholder:text-black/50 dark:placeholder:text-white/50"
                  placeholder="Enter your name"
                />
              </div>
              <div className="sm:col-span-1 col-span-2">
                <label
                  htmlFor="Phone"
                  className="text-lg font-medium inline-block text-white mb-4"
                >
                  Phone No.
                </label>
                <input
                  type="number"
                  name="Phone"
                  id="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                  className="px-5 py-4 rounded-lg text-base dark:bg-darkmode dark:text-white outline-none border focus:border-primary focus-visible:shadow-none dark:border-border_color dark:focus:border-primary bg-white placeholder:text-black/50 dark:placeholder:text-white/50"
                  placeholder="Enter your Phone No."
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="Mail"
                  className="text-lg font-medium inline-block text-white mb-4"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="Mail"
                  value={formData.Mail}
                  onChange={handleChange}
                  id="Mail"
                  className="px-5 py-4 rounded-lg text-base dark:bg-darkmode dark:text-white outline-none border focus:border-primary focus-visible:shadow-none dark:border-border_color dark:focus:border-primary bg-white placeholder:text-black/50 dark:placeholder:text-white/50"
                  placeholder="Enter your email"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="password"
                  className="text-lg font-medium inline-block text-white mb-4"
                >
                  Message
                </label>
                <textarea
                  id='Message'
                  name='Message'
                  value={formData.Message}
                  onChange={handleChange}
                  className='border border-border px-4 py-2 focus:outline-hidden placeholder:text-placeholder bg-white dark:bg-darkmode dark:placeholder:text-white/50 dark:border-border_color rounded-lg dark:focus:border-primary focus:border-primary'
                  placeholder='Anything else you wanna communicate'></textarea>
              </div>
              <div className="col-span-2">
                <div className="flex items-center gap-3">
                  <input type="checkbox" required name="condition" id="condition" />
                  <label htmlFor="condition" className="text-lg font-medium text-white">
                    you agree to our{" "}
                    <Link
                      href="#"
                      className="text-primary hover:text-orange-600 duration-300"
                    >
                      terms and conditions
                    </Link>{" "}
                    of use.
                  </label>
                </div>
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  disabled={!isFormValid || loader}
                  className={`border leading-none px-6 text-lg font-medium py-4 rounded-lg 
                    ${!isFormValid || loader ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-primary border-primary text-white hover:bg-transparent hover:text-primary cursor-pointer'}`}
                >
                  Try For Free
                </button>
              </div>
            </form>
            {showThanks && (
              <div className="text-white bg-green-400 rounded-full px-4 text-lg mb-4.5 mt-2 absolute flex items-center gap-2">
                Your free trial has started.
                <div className="w-3 h-3 rounded-full animate-spin border-2 border-solid border-white border-t-transparent"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;

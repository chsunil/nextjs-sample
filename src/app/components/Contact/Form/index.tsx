"use client"
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    projectname: "",
    email: "",
    Project: "",
    Message: ""
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
    formData.name = "";
    formData.projectname = "";
    formData.email = "";
    formData.Project = "";
    formData.Message = "";
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true);

    fetch("https://formsubmit.co/ajax/bhainirav772@gmail.com", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        Name: formData.name,
        ProjectName: formData.projectname,
        Email: formData.email,
        Project: formData.Project,
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
  return (
    <section className="dark:bg-darkmode pb-24 !pt-0">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
          <div className="col-span-6 md:pt-12 pt-0 relative">
            <h2 className="max-w-72 text-[40px] leading-[3rem] font-bold mb-9">Get A Quote</h2>
            <form onSubmit={handleSubmit} className="flex flex-wrap w-full m-auto justify-between">
              <div className="sm:flex gap-3 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label
                    htmlFor="name"
                    className="pb-3 inline-block text-base"
                  >
                    User Name*
                  </label>
                  <input
                    id='name'
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full text-base px-4 rounded-lg py-2.5 border-border border-solid dark:border-darkborder dark:text-white dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  />
                </div>
                <div className="mx-0 my-2.5 flex-1">
                  <label
                    htmlFor="projectname"
                    className="pb-3 inline-block text-base"
                  >
                    Project Name*
                  </label>
                  <input
                    id='projectname'
                    type='text'
                    name='projectname'
                    value={formData.projectname}
                    onChange={handleChange}
                    className="w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-darkborder border-solid dark:text-white  dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  />
                </div>
              </div>
              <div className="sm:flex gap-3 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label
                    htmlFor="email"
                    className="pb-3 inline-block text-base"
                  >
                    Email address*
                  </label>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-darkborder border-solid dark:text-white  dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  />
                </div>
                <div className="mx-0 my-2.5 flex-1">
                  <label
                    htmlFor="Project"
                    className="pb-3 inline-block text-base"
                  >
                    Project*
                  </label>
                  <select name="Project"
                    id="Project"
                    value={formData.Project}
                    onChange={handleChange} className="w-full text-base px-4 py-2.5 rounded-lg border-border dark:text-white border-solid dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-darkborder focus:outline-0">
                    <option value="">Choose the type of app</option>
                    <option value="EdTech App">
                      EdTech App
                    </option>
                    <option value="eCommerce Apps">eCommerce Apps</option>
                    <option value="CRM Apps">CRM Apps</option>
                    <option value="Health Apps">
                      Health Apps
                    </option>
                    <option value="Web Analytics Apps">
                      Web Analytics Apps
                    </option>
                    <option value="Banking Apps">
                      Banking Apps
                    </option>
                  </select>
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="password"
                  className="text-base inline-block pb-4"
                >
                  Message
                </label>
                <textarea
                  id='Message'
                  name='Message'
                  value={formData.Message}
                  onChange={handleChange}
                  className='border border-border px-4 py-2 focus:outline-hidden bg-white dark:bg-darkmode dark:border-border_color rounded-lg dark:focus:border-primary focus:border-primary'
                  placeholder='Anything else you wanna communicate'>
                </textarea>
              </div>
              <div className="mx-0 my-2.5 w-full">
                <button
                  type="submit"
                  disabled={!isFormValid || loader}
                  className={`border leading-none px-6 text-lg font-medium py-4 rounded-lg 
                    ${!isFormValid || loader ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-primary border-primary text-white hover:bg-transparent hover:text-primary cursor-pointer'}`}
                >
                  Submit
                </button>
              </div>
            </form>
            {showThanks && (
              <div className="text-white bg-green-400 rounded-full px-4 text-lg mb-4.5 mt-2 absolute flex items-center gap-2">
                Request submitted successfully. Thank you.
                <div className="w-3 h-3 rounded-full animate-spin border-2 border-solid border-white border-t-transparent"></div>
              </div>
            )}
          </div>
          <div className="col-span-6">
            <Image
              src="/images/contact-page/contact.webp"
              alt="Contact"
              width={1300}
              height={0}
              quality={100}
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

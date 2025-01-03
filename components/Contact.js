import React, { forwardRef } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import Swal from "sweetalert2";

const Contact = ({ text }, ref) => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "35809fd4-eefc-46f0-abf7-a7d9b23116fc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
    event.target.reset();
  };

  return (
    <div
      className="relative isolate bg-gradient-to-r from-[#e3fbe3] to-[#b6f7b6]"
      ref={ref}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-16 pt-16 lg:static lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Contact me
            </h2>
            <p className="mt-6 text-lg leading-8">Feel free to reach out.</p>
            <dl className="mt-10 space-y-4 text-base leading-7">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Phone</span>
                  <FaPhone className="text-2xl mt-1" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="tel:+917349422401">
                    +91 9886592131
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <MdEmail className="text-2xl mt-1" />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto:mohammadnafeed013@gmail.com"
                  >
                    shahilsha699@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <IoHomeSharp className="text-2xl mt-1" />
                </dt>
                <dd>Mangalore, Karnataka, India</dd>
              </div>
            </dl>
            <div className="flex gap-12 justify-start mt-12">
              <Link href="https://www.linkedin.com/in/mohammed-shahil-872660209/">
                <FaLinkedin className="text-3xl rounded-md text-blue-800 transition cursor-pointer hover:scale-125" />
              </Link>
              <Link href="https://github.com/Crazydrooo/">
                <FaGithub className="text-3xl rounded-md transition cursor-pointer hover:scale-125" />
              </Link>
              <Link href="https://www.instagram.com/shahil_699/">
                <RiInstagramFill className="text-3xl rounded-md transition text-pink-600 cursor-pointer hover:scale-125" />
              </Link>
            </div>
          </div>
        </div>
        <form className="px-6 pb-16 pt-16 lg:px-8" onSubmit={onSubmit}>
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    name="name"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    rows="4"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    name="message"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="w-max rounded-lg border-[1px] border-black px-5 py-1.5 transition bg-gradient-to-r from-[#e3fbe3] to-[#b6f7b6] hover:text-green-500"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default forwardRef(Contact);

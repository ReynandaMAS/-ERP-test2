import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div id="contact" className="relative mt-[50px]">
        <img
          className="w-full h-[400px] object-cover"
          alt="contactus"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/79731568097599.5b50bca477735.jpg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <p className="absolute top-[150px] left-[50%] transform -translate-x-1/2 text-white text-7xl md:text-8xl font-bold tracking-wide z-10">
          CONTACT
        </p>
      </div>
      <div className="text-center text-5xl font-bold mt-20 text-white">
        Call us right now!
      </div>
      <div className="text-center text-xl text-white mt-6">
        Start Building Your Success From Now
      </div>
      <div className="flex flex-col md:flex-row m-10">
        <div className="flex-1 md:mr-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-3xl font-semibold mb-5">Contact Form</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="text-lg mb-1 block">
                  First Name*
                </label>
                <input
                  id="firstName"
                  placeholder="First Name"
                  type="text"
                  className="w-full border border-gray-300 h-[50px] px-4 rounded-lg text-xl focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="text-lg mb-1 block">
                  Last Name*
                </label>
                <input
                  id="lastName"
                  placeholder="Last Name"
                  type="text"
                  className="w-full border border-gray-300 h-[50px] px-4 rounded-lg text-xl focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-lg mb-1 block">
                  Company Email*
                </label>
                <input
                  id="email"
                  placeholder="Company Email"
                  type="email"
                  className="w-full border border-gray-300 h-[50px] px-4 rounded-lg text-xl focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="companyName" className="text-lg mb-1 block">
                  Company Name*
                </label>
                <input
                  id="companyName"
                  placeholder="Company Name"
                  type="text"
                  className="w-full border border-gray-300 h-[50px] px-4 rounded-lg text-xl focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="text-lg mb-1 block">
                  Phone Number*
                </label>
                <input
                  id="phoneNumber"
                  placeholder="Phone Number"
                  type="tel"
                  className="w-full border border-gray-300 h-[50px] px-4 rounded-lg text-xl focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="question" className="text-lg mb-1 block">
                  Question*
                </label>
                <textarea
                  id="question"
                  placeholder="Enter your message"
                  className="w-full border border-gray-300 h-32 px-4 py-2 rounded-lg text-xl resize-none focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              * We will handle your personal data as described in our Privacy
              Policy, to answer your question and provide information about our
              products and services.
            </p>
            <button className="text-lg border-2 border-blue-500 rounded-lg bg-blue-500 text-white font-bold py-3 px-8 mt-6 hover:bg-blue-600 transition duration-300">
              Submit
            </button>
          </div>
        </div>
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-3xl font-semibold mb-6">RYN Indonesia</div>
            <div className="text-lg mb-4">Phone: +62 823 2710 1575</div>
            <div className="text-lg mb-6">
              <b>Address:</b>
              <br />
              RYN Indonesia
              <br />
              JL. Laut Karanganyar RT004/001 Adipala
              <br />
              Cilacap 53271
              <br />
              Indonesia
            </div>
            <div className="text-3xl font-semibold mb-6">Follow Us</div>
            <div className="flex items-center justify-center gap-5">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                <FaLinkedin size={40} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500"
              >
                <FaTwitter size={40} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:text-blue-900"
              >
                <FaFacebook size={40} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700"
              >
                <FaInstagram size={40} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700"
              >
                <FaYoutube size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

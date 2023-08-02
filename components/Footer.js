import Link from "next/link";
import React from "react";
import {
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsFillTelephoneFill,
  BsFillCarFrontFill,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="body-font bg-gray-100">
      <div className="px-2 py-8 grid grid-cols-1 md:grid-cols-3 text-gray-600 ">
        <div className="px-5 flex flex-col">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <img src={"/logo.png"} className="w-48" />
          </Link>
          <p className="text-left font-semibold">
            Buy and Sell Used cars from anywhere with ease. Certified used cars
            with more than 150 check points Book Your inspection at comfort of
            your home
          </p>

          <div className="flex gap-2 my-6">
            <a
              className=" cursor-pointer text-gray-500 hover:text-blue-500 transition-all duration-150"
              href=""
            >
              <BsFacebook className="text-2xl" />
            </a>
            <a
              className="ml-3 cursor-pointer text-gray-500 hover:text-red-500 transition-all duration-150"
              href=""
            >
              <BsInstagram className="text-2xl" />
            </a>
            <a
              className="ml-3 cursor-pointer text-gray-500 hover:text-blue-500 transition-all duration-150"
              href=""
            >
              <BsLinkedin className="text-2xl" />
            </a>
            <a
              className="ml-3 cursor-pointer text-gray-500 hover:text-blue-500 transition-all duration-150"
              href=""
            >
              <BsTwitter className="text-2xl" />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Copyright © 2023. All rights reserved. by Unifi Cars
          </p>
        </div>

        <div className="my-4 md:my-0">
          <div className="px-2 grid grid-cols-2 gap-3 font-bold">
            <div>
              <h4 className="text-xl mb-4 border-gray-300 text-blue-950 border-b-2">
                More
              </h4>
              <ul className="flex gap-2 flex-col text-blue-950">
                <li className="hover:text-orange-500 transition-all duration-150">
                  <Link href={"/"}>About Us</Link>
                </li>
                <li className="hover:text-orange-500 transition-all duration-150">
                  <Link href={"/"}>Contact</Link>
                </li>
                <li className="hover:text-orange-500 transition-all duration-150">
                  <Link href={"/"}>Hub location</Link>
                </li>
                <li className="hover:text-orange-500 transition-all duration-150">
                  <Link href={"/"}>Blogs</Link>
                </li>
                <li className="hover:text-orange-500 transition-all duration-150">
                  <Link href={"/"}>Customer Views</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl mb-4 border-gray-300 text-blue-950 border-b-2">
                Cars
              </h4>
              <ul className="flex gap-2 flex-col text-blue-950">
                <li className="hover:text-orange-500 transition-all duration-150">
                  <Link href={"/"}>Buy Used Cars</Link>
                </li>
                <li className="hover:text-orange-500 transition-all duration-150">
                  <Link href={"/"}>Sell Used Cars</Link>
                </li>
                <li className="hover:text-orange-500 transition-all duration-150">
                  <Link href={"/"}>Browse All cars</Link>
                </li>
                <li className="hover:text-orange-500 transition-all duration-150">
                  <Link href={"/"}>Unifi Cars Certified</Link>
                </li>
                <li className="hover:text-orange-500 transition-all duration-150">
                  <Link href={"/"}>Customer Views</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-10">
            <div className="bg-blue-200 cursor-pointer flex rounded hover:bg-orange-400 font-bold shadow-lg text-blue-950 p-2 my-4 whitespace-nowrap">
              <a href="tel:9911771977" className=" flex">
                <BsFillTelephoneFill className="ml-2 my-1" />
                +91 9911771977
              </a>
            </div>
            <div className="bg-blue-200 flex cursor-pointer hover:bg-orange-400 rounded font-bold shadow-lg text-blue-950 p-2 my-4">
              <BsFillCarFrontFill className="mx-2 my-1"/> Browse Cars
            </div>
          </div>
        </div>
        <div className="flex flex-col mr-4 pl-3">
          <h4 className="text-blue-950 font-bold mb-4 text-xl border-b-2 border-gray-300">
            Reach Us
          </h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.054242506969!2d77.14165217602446!3d28.65809448291837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03dcf6e36613%3A0x771518fcd5684a90!2sUnifi%20Cars!5e0!3m2!1sen!2sin!4v1690362842853!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

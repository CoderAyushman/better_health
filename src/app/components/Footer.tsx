"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="text-sm md:text-base text-center fixed md:relative w-full self-end  bg-gray-300 bottom-0 ">
      <p className="p-0">
        {" "}
        &copy; 2024{" "}
        <span
          className="font-semibold text-gray-600 cursor-pointer"
          onClick={() => router.push("/about")}
        >
          Ayushman Mishra
        </span>
        . Coded with <span className="text-red-500">❤️</span>
      </p>
    </div>
  );
};

export default Footer;

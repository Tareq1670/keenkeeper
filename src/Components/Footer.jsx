import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#244d3fFF] pt-20">
            <div className="max-w-[1110px] mx-auto px-1 lg:px-0">
                <div className="flex flex-col items-center justify-center text-center">
                    <Image
                        src={"/assets/logo-xl.png"}
                        height={61}
                        width={412}
                        alt="Footer Logo Image"
                        className="w-60 md:w-80 lg:w-110 h-auto"
                    />
                    <p className="text-white/80 mt-2 md:mt-4  mb-4 md:mb-6">
                        Your personal shelf of meaningful connections. Browse,
                        tend, and nurture the relationships that matter most.
                    </p>
                    <div className="flex flex-col space-y-2 md:space-y-4 items-center justify-center">
                        <h2 className="text-white text-[20px]">Social Links</h2>
                        <div className="flex mx-auto space-x-2">
                            <Link href={""} className="bg-white p-2 rounded-full hover:text-blue-600 transition-all ease-in duration-200">
                                <AiFillInstagram/>
                            </Link>
                            <Link href={""}  className="bg-white p-2 rounded-full hover:text-blue-600 transition-all ease-in duration-200">
                                <FaSquareFacebook />
                            </Link >
                            <Link href={""}  className="bg-white p-2 rounded-full hover:text-blue-600 transition-all ease-in duration-200">
                                <FaXTwitter />
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className="mt-5 sm:mt-7 lg:mt-10 border-[#1a8862FF]/40"/>
                <div className="py-6 flex flex-col md:flex-row  md:py-[30px] items-center justify-center md:justify-between  text-center md:text-left  text-[#fafafaFF]/70 ">
                    <div>
                        <p>© 2026 KeenKeeper. All rights reserved.</p>
                    </div>
                    <div className="flex gap-8 items-center justify-center">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

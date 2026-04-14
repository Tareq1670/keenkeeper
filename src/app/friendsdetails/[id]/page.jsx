"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { use } from "react";
import { BiAlarmSnooze } from "react-icons/bi";
import { FiArchive } from "react-icons/fi";
import { LuVideo } from "react-icons/lu";
import { MdOutlineTextsms, MdOutlineWifiCalling3 } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const friendsDataPromise = async () => {
    const res = await fetch("http://localhost:3000/friendsData.json");
    return res.json();
};

const friendsData = friendsDataPromise();
const FriendsDetailsPage = ({ params }) => {
    const { id: userId } = useParams(params);
    const allData = use(friendsData);
    const isFind = allData.find((data) => data.id === Number(userId));
    const {
        id,
        bio,
        picture,
        name,
        tags,
        goal,
        next_due_date,
        status,
        days_since_contact,
        email,
    } = isFind;
    console.log(isFind);
    return (
        <div className=" px-1 md:px-0 mt-[40px] md:mt-[60px] lg:mt-[80px]  mb-[40px] md:mb-[60px] lg:mb-[80px] max-w-[1110px] mx-auto w-full min-h-screen">
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="max-w-[500px] mx-auto lg:w-[40%]">
                    <div className="space-y-4">
                        <div className="space-y-3 shadow shadow-md w-full rounded-md flex flex-col items-center justify-center text-center p-6 bg-white">
                            <Image
                                src={picture}
                                height={80}
                                width={80}
                                alt={name}
                                className="w-[80px] h-[80px] rounded-full object-cover"
                            />
                            <div className="space-y-2">
                                <h2>{name}</h2>
                                <p
                                    className={`text-white text-[12px] font-medium badge ${status.toLowerCase() === "overdue" ? "bg-red-500" : status.toLowerCase() === "almost due" ? "bg-yellow-500" : status.toLowerCase() === "on-track" ? "bg-[#244d3fFF]" : ""} h-auto w-auto py-[6px] px-[8px] capitalize rounded-full`}
                                >
                                    {status}
                                </p>
                                <div className="flex items-center flex-wrap text-center justify-center gap-2">
                                    {tags.map((tag, i) => (
                                        <p
                                            className="h-auto w-auto py-[6px] px-[8px] font-medium text-[12px] badge bg-[#bcffd3] rounded-full uppercase text-black"
                                            key={i}
                                        >
                                            {tag}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <p>
                                <q className="italic text-[#64748bFF] font-medium">
                                    {bio}
                                </q>
                            </p>
                            <p className="text-[14px] text-[#64748bFF]">
                                Preferred : {email}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-full bg-white rounded-sm shadow-md py-4 flex items-center justify-center text-black font-medium cursor-pointer gap-1">
                                <BiAlarmSnooze /> Snooze 2 Weeks
                            </div>
                            <div className="w-full bg-white rounded-sm shadow-md py-4 flex items-center justify-center text-black font-medium cursor-pointer gap-1">
                                <FiArchive /> Archive
                            </div>
                            <div className="w-full bg-white rounded-sm shadow-md py-4 flex items-center justify-center text-red-600 font-medium cursor-pointer gap-1">
                                <RiDeleteBinLine /> Delete
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-full space-y-4">
                    <div className="grid grid-cols-3 gap-2 md:gap-6 text-center">
                        <div className="py-6 md:py-8 bg-white rounded-md shadow-md flex items-center justify-center space-y-2 flex-col">
                            <h2 className="font-semibold text-xl md:text-[30px] text-[#244d3fFF]">
                                {days_since_contact}
                            </h2>
                            <p className="text-[#64748bFF] text-[14px] md:text-[18px]">
                                Days Since Contact
                            </p>
                        </div>
                        <div className="py-6 md:py-8 bg-white rounded-md shadow-md flex items-center justify-center space-y-2 flex-col">
                            <h2 className="font-semibold  text-xl md:text-[30px] text-[#244d3fFF]">
                                {goal}
                            </h2>
                            <p className="text-[#64748bFF] text-[14px] md:text-[18px]">
                                Goal (Days)
                            </p>
                        </div>
                        <div className="py-6 md:py-8 bg-white rounded-md shadow-md flex items-center justify-center space-y-2 flex-col">
                            <h2 className="font-semibold  text-xl md:text-[30px] text-[#244d3fFF]">
                                {new Date(next_due_date).toLocaleDateString(
                                    "en-US",
                                    {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    },
                                )}
                            </h2>
                            <p className="text-[#64748bFF] text-[14px] md:text-[18px]">
                                Next Due
                            </p>
                        </div>
                    </div>
                    <div className="rounded-md shadow-md p-4 md:p-6 bg-white">
                        <div className="flex justify-between items-center">
                            <h2 className="text-[20px] text-[#244d3fFF] font-medium">
                                Relationship {goal}
                            </h2>
                            <button className="btn">Edit</button>
                        </div>
                        <div>
                            <p className="text-[#64748bFF] text-[18px]">
                                Connect every{" "}
                                <span className="text-black font-semibold">
                                    {days_since_contact} days
                                </span>
                            </p>
                        </div>
                    </div>
                    {/* Function Button */}
                    <div className="bg-white shadow-md rounded-md p-4 md:p-6 space-y-4">
                        <h2 className="text-[#244d3fFF] text-[20px] font-medium">
                            Quick check-In
                        </h2>
                        <div className="grid grid-cols-3 gap-2 md:gap-4">
                            <div className="flex flex-col space-y-2 items-center justify-center bg-zinc-100 py-4 rounded-md border border-zinc-200 hover:bg-green-50 transition-all ease-in duration-200 cursor-pointer hover:shadow ">
                                <MdOutlineWifiCalling3
                                    size={20}
                                    className="font-bold text-[26px]"
                                />
                                <p className="text-[18px] text-black">Call</p>
                            </div>
                            <div className="flex flex-col space-y-2 items-center justify-center bg-zinc-100 py-4 rounded-md border border-zinc-200 hover:bg-green-50 transition-all ease-in duration-200 cursor-pointer hover:shadow ">
                                <MdOutlineTextsms 
                                    size={20}
                                    className="font-bold text-[26px]"
                                />
                                <p className="text-[18px] text-black">Text</p>
                            </div>
                            <div className="flex flex-col space-y-2 items-center justify-center bg-zinc-100 py-4 rounded-md border border-zinc-200 hover:bg-green-50 transition-all ease-in duration-200 cursor-pointer hover:shadow ">
                                <LuVideo 
                                    size={20}
                                    className="font-bold text-[26px]"
                                />
                                <p className="text-[18px] text-black">Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetailsPage;

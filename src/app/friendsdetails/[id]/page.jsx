"use client";
import { ProviderContext } from "@/Context/context.provider";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { use, useContext } from "react";
import { BiAlarmSnooze } from "react-icons/bi";
import { FiArchive } from "react-icons/fi";
import { GoHistory } from "react-icons/go";
import { IoCall } from "react-icons/io5";
import { LuVideo } from "react-icons/lu";
import {
    MdOutlineTextsms,
    MdOutlineVideocam,
    MdOutlineWifiCalling3,
} from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";

const friendsDataPromise = async () => {
    const res = await fetch(
        "https://keenkeeper-ten.vercel.app/friendsdata.json",
    );
    return res.json();
};

const friendsData = friendsDataPromise();
const FriendsDetailsPage = ({ params }) => {
    const { id: userId } = useParams(params);
    const allData = use(friendsData);
    const isFind = allData.find((data) => data.id === Number(userId));

    if (!isFind) {
        return (
            <div className="px-4 mt-[60px] lg:mt-[100px] mb-[60px] max-w-[1110px] mx-auto w-full flex items-center justify-center h-90">
                <div className="text-center max-w-sm">
                    {/* Minimalist Icon Circle */}
                    <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                    </div>

                    <h2 className="text-xl font-semibold text-slate-900 mb-2">
                        Friend Not Found
                    </h2>

                    <p className="text-slate-500 mb-8 text-sm leading-relaxed">
                        We couldn't find the friend you're looking for. Please
                        check the ID or go back to the list.
                    </p>

                    <Link href={"/"} className="btn btn-neutral">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

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

    const { handleLogs, log } = useContext(ProviderContext);

    console.log(log);

    const handleCallLogs = (type) => {
        console.log("click ", type);

        const now = new Date();

        const dateTime = now.toLocaleString();

        const callLogData = {
            name: name,
            logType: type,
            date: dateTime,
        };
        handleLogs(callLogData);
        toast.success(
            <div>
                <span className="font-bold text-slate-800">{name}</span>
                <span className="mx-1 text-slate-500">is officially</span>
                <span className="text-green-600 font-extrabold uppercase tracking-wider text-xs">
                    {type}
                </span>
            </div>,
            {
                icon: "🚀",
                style: {
                    borderRadius: "12px",
                    background: "#fff",
                    color: "#333",
                    borderLeft: "4px solid #10B981",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                },
            },
        );
    };

    const isThisLog = log.filter((data) => data.name === name);

    return (
        <div className=" px-1 md:px-0 mt-[40px] md:mt-[60px] lg:mt-[80px]  mb-[40px] md:mb-[60px] lg:mb-[80px] max-w-[1110px] mx-auto w-full">
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
                            <div
                                onClick={() => handleCallLogs("Call")}
                                className="flex flex-col space-y-2 items-center justify-center bg-zinc-100 py-4 rounded-md border border-zinc-200 hover:bg-green-50 transition-all ease-in duration-200 cursor-pointer hover:shadow "
                            >
                                <MdOutlineWifiCalling3
                                    size={20}
                                    className="font-bold text-[26px]"
                                />
                                <p className="text-[18px] text-black">Call</p>
                            </div>
                            <div
                                onClick={() => handleCallLogs("Text")}
                                className="flex flex-col space-y-2 items-center justify-center bg-zinc-100 py-4 rounded-md border border-zinc-200 hover:bg-green-50 transition-all ease-in duration-200 cursor-pointer hover:shadow "
                            >
                                <MdOutlineTextsms
                                    size={20}
                                    className="font-bold text-[26px]"
                                />
                                <p className="text-[18px] text-black">Text</p>
                            </div>
                            <div
                                onClick={() => handleCallLogs("Video")}
                                className="flex flex-col space-y-2 items-center justify-center bg-zinc-100 py-4 rounded-md border border-zinc-200 hover:bg-green-50 transition-all ease-in duration-200 cursor-pointer hover:shadow "
                            >
                                <LuVideo
                                    size={20}
                                    className="font-bold text-[26px]"
                                />
                                <p className="text-[18px] text-black">Video</p>
                            </div>
                        </div>
                    </div>
                    {/* Show data */}
                    <div className="bg-white shadow-md rounded-md p-4 md:p-6 space-y-4">
                        <div className="flex justify-between items-center mb-[20px]">
                            <h2 className="text-[#244d3fFF] text-[20px] font-medium">
                                Recent Interactions
                            </h2>
                            <button className="flex items-center btn justify-center">
                                <GoHistory /> Full History
                            </button>
                        </div>
                        <div>
                            {!isThisLog.length ? (
                                <div class="flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-200 rounded-3xl">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="48"
                                        height="48"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#94a3b8"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="mb-4"
                                    >
                                        <path d="M12 8v4l3 3" />
                                        <circle cx="12" cy="12" r="9" />
                                    </svg>
                                    <h2 class="text-lg font-medium text-gray-400 uppercase tracking-widest">
                                        No History Available
                                    </h2>
                                </div>
                            ) : (
                                isThisLog.map((logs, i) => (
                                    <div
                                        key={i}
                                        className="border border-zinc-200  p-2 md:p-4"
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center space-x-3 w-1/2">
                                                <div className=" text-[26px] md:text-[32px]">
                                                    {logs.logType === "Call" ? (
                                                        <IoCall />
                                                    ) : logs.logType ===
                                                      "Text" ? (
                                                        <MdOutlineTextsms />
                                                    ) : logs.logType ===
                                                      "Video" ? (
                                                        <MdOutlineVideocam />
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                                <div>
                                                    <h2 className="text-[#1f2937FF] font-semibold text-[18px]">
                                                        {logs.name}
                                                    </h2>
                                                    <p className="text-[14px] md:text-[16px] line-clamp-1 text-[#64748bFF]">
                                                        Asked for career advice
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[12px] md:text-[14px] text-[#64748bFF]">
                                                    {logs?.date
                                                        ? new Date(
                                                              logs.date,
                                                          ).toLocaleDateString(
                                                              "en-US",
                                                              {
                                                                  month: "short",
                                                                  day: "numeric",
                                                                  year: "numeric",
                                                                  hour: "2-digit",
                                                                  minute: "2-digit",
                                                                  hour12: true,
                                                              },
                                                          )
                                                        : "No Date"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetailsPage;

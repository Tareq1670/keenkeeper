"use client";
import LogList from "@/Components/LogList";
import { ProviderContext } from "@/Context/context.provider";
import React, { useContext, useEffect, useState } from "react";
import { BsClipboardX } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

const TimeLinePage = () => {
    const { log } = useContext(ProviderContext);
    const [filterValue, setFilterValue] = useState("");
    const [sortData, setSortData] = useState(log);
    const [searchValue, setSearchValuer] = useState("");

    const handleInput = (e) => {
        setSearchValuer(e.target.value)
    }

    useEffect(() => {
        const today = new Date();

        if (filterValue === "call") {
            const callSort = log.filter((data) => data.logType === "Call");
            return setSortData(callSort);
        } else if (filterValue === "text") {
            const smsSort = log.filter((data) => data.logType === "Text");
            return setSortData(smsSort);
        } else if (filterValue === "video") {
            const videoSort = log.filter((data) => data.logType === "Video");
            return setSortData(videoSort);
        } else if (filterValue === "today") {
            const todaySort = log.filter((data) => {
                const logDate = new Date(data.date);
                return logDate.toDateString() === today.toDateString();
            });
            return setSortData(todaySort);
        } else if (filterValue === "yesterday") {
            const yesterDay = new Date();
            yesterDay.setDate(today.getDate() - 1);
            const yesterdaySort = log.filter((data) => {
                const thatYesterDay = new Date(data.date);
                return (
                    thatYesterDay.toDateString() === yesterDay.toDateString()
                );
            });
            return setSortData(yesterdaySort);
        } else if (filterValue === "7days") {
            const last7days = new Date();
            last7days.setDate(today.getDate() - 7);
            last7days.setHours(0, 0, 0, 0);
            const last7daysSort = log.filter((data) => {
                const logDate = new Date(data.date);
                return logDate >= last7days;
            });
            return setSortData(last7daysSort);
        }else if(searchValue){
            const searchSort = log.filter(data => data.name.toLowerCase().includes(searchValue.toLowerCase()))
            return setSortData(searchSort)
        }
         else {
            setSortData(log);
        }
    }, [filterValue, log,searchValue]);

    return (
        <div className="px-1 lg:px-0 my-[60px] md:my-[70px] lg:my-[80px] max-w-[1110px] mx-auto w-full">
            <h2 className="text-[#1f2937FF] text-5xl font-bold mb-4 md:mb-6">
                Timeline
            </h2>
            <div className=" mb-[20px] md:mb-[30px] lg:mb-[40px]  flex flex-col sm:flex-row justify-between space-y-2">
                <div className="w-full">
                    <select
                        defaultValue={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                        className="w-full sm:max-w-[350px] w-full border-1 border-zinc-400 outline-none rounded-md px-4 py-3 text-[18px] text-[#64748bFF]"
                    >
                        <option value="">Filter timeline</option>
                        <option value="call">Call</option>
                        <option value="text">Text</option>
                        <option value="video">Video</option>
                        <option value="today">Today</option>
                        <option value="yesterday">Yesterday</option>
                        <option value="7days">Last 7 Days</option>
                    </select>
                </div>
                <div className="w-full sm:max-w-[30%] w-full">
                    <label className=" input w-full border-1 border-zinc-400 outline-none rounded-md px-4 py-3 text-[18px] text-[#64748bFF] h-auto w-auto">
                        <IoIosSearch />
                        <input onChange={handleInput} type="text" placeholder="Search your timeline" />
                    </label>
                </div>
            </div>

            <div>
                {!sortData.length ? (
                    <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center border border-zinc-200 rounded-md">
                        <div className="bg-gray-100 p-4 rounded-full mb-4">
                            <BsClipboardX size={48} className="text-gray-400" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            No Logs Available
                        </h2>
                        <p className="text-gray-500 max-w-xs">
                            There are currently no activity logs to display.
                            Check back later for updates.
                        </p>
                    </div>
                ) : (
                    ""
                )}
            </div>

            <div className="space-y-4 md:space-y-6">
                {sortData.map((item, i) => (
                    <LogList key={i} item={item} />
                ))}
            </div>
        </div>
    );
};

export default TimeLinePage;

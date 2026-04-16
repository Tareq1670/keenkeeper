import { FaVideo } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdTextsms } from "react-icons/md";

const LogList = ({ item }) => {
    const { name, logType, date } = item;
    return (
        <div className="bg-white p-2 md:p-4 shadow-sm border rounded-md border-zinc-200">
            <div className="flex space-x-4 items-center ">
                <div className="font-medium text-[40px]">
                    {logType === "Call" ? (
                        <IoCall />
                    ) : logType === "Text" ? (
                        <MdTextsms />
                    ) : logType === "Video" ? (
                        <FaVideo />
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    <h2 className="text-[20px] text-[#244D3F] font-medium">
                        {logType}{" "}
                        <span className="text-[18px] text-[#64748B] font-normal mb-1">
                            with {name}
                        </span>
                    </h2>
                    <p className="text-[18px] text-[#64748B]">
                        {new Date(date).toLocaleString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            minute: "2-digit",
                            hour: "2-digit",
                            hour12: true,
                        })}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LogList;

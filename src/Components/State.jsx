"use client";
import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { useContext } from "react";
import { ProviderContext } from "@/Context/context.provider";

const StatusPage = () => {
    const { log } = useContext(ProviderContext);

    const filterCall = log?.filter((data) => data.logType === "Call") || [];
    const filterText = log?.filter((data) => data.logType === "Text") || [];
    const filterVideo = log?.filter((data) => data.logType === "Video") || [];

    const data = [
        { name: "Call", value: filterCall.length, fill: "#274d40" },
        { name: "Text", value: filterText.length, fill: "#8038f6" },
        { name: "Video", value: filterVideo.length, fill: "#37a162" },
    ];

    return (
        <div className="px-1 md:px-0 lg:px-0 my-[50px] md:my-[70px] lg:my-[80px] max-w-[1110px] mx-auto w-full">
            <h2 className=" text-3xl md:text-4xl md:text-5xl text-[#1f2937] font-bold mb-6">
                Friendship Analytics
            </h2>

            {!log.length ? (
                <div className="w-full h-[300px] md:h-[450px] bg-white border border-zinc-200 rounded-md shadow-sm flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mb-4">
                        <svg
                            className="w-10 h-10 text-zinc-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-[#244d3f] text-xl font-semibold mb-2">
                        No Friends Data Available
                    </h3>
                    <p className="text-zinc-500 max-w-[300px]">
                        Log your first interaction to spark these analytics.
                    </p>
                </div>
            ) : (
                <div className="w-full h-[400px] md:h-[450px] bg-white border border-zinc-200 p-4 md:p-8 rounded-md shadow-sm">
                    <h2 className="text-[#244d3f] text-[20px] font-medium mb-4">
                        By Interaction Type
                    </h2>

                    <div className="w-full h-[300px]">
                        <ResponsiveContainer width="100%" height="100%" >
                            <PieChart>
                                <Pie
                                    data={data}
                                    innerRadius="70%"
                                    outerRadius="100%"
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.fill}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{
                                        borderRadius: "8px",
                                        border: "none",
                                        boxShadow:
                                            "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                                    }}
                                />
                                <Legend
                                    verticalAlign="bottom"
                                    align="center"
                                    iconType="circle"
                                />
                                <RechartsDevtools />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StatusPage;

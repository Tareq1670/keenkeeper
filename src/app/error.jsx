"use client";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="min-h-[400px] md:min-h-[700px] flex items-center justify-center bg-white px-4 sm:px-6 overflow-hidden">
            <div className="relative text-center w-full max-w-lg">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full">
                    <h1 className="text-[7rem] sm:text-[12rem] md:text-[18rem] font-black text-slate-50 opacity-80 select-none leading-none">
                        404
                    </h1>
                </div>

                <div className="relative z-10">
                    <div className="mb-4 sm:mb-6 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#244d3f]/10 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 sm:h-10 sm:w-10 text-[#244d3f]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                        </svg>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
                        Oops! Data Missing
                    </h2>

                    <p className="text-slate-600 mb-8 sm:mb-10 text-sm sm:text-base md:text-lg leading-relaxed max-w-[300px] sm:max-w-md mx-auto italic">
                        "It seems I’ve missed some data or there’s a glitch in
                        my code causing this error. I’m already looking into
                        it—please head back to the homepage for now!"
                    </p>

                    <div>
                        <Link href="/">
                            <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-3.5 bg-[#244d3f] text-white font-semibold rounded-md hover:bg-[#1a3a2f] transition-all duration-300 cursor-pointer">
                                Back to Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
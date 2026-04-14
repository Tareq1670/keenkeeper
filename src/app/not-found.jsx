import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <h1 className="text-9xl font-extrabold text-slate-100 selection:bg-none">
                    404
                </h1>
                <div className="relative -mt-16">
                    <h2 className="text-3xl font-bold text-slate-800 mb-3">
                        Oops! Page not found
                    </h2>

                    <p className="text-slate-500 mb-8 leading-relaxed">
                        The page you are looking for might have been removed,
                        had its name changed, or is temporarily unavailable.
                    </p>

                    <Link href="/">
                        <button className="px-8 py-3 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-200 active:scale-95 cursor-pointer">
                            Back to Home
                        </button>
                    </Link>
                </div>
                <div className="mt-12 flex justify-center gap-4 text-slate-300">
                    <div className="h-1 w-12 bg-current rounded-full"></div>
                    <div className="h-1 w-4 bg-current rounded-full"></div>
                    <div className="h-1 w-1 bg-current rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;

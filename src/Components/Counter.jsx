const Counter = () => {
    const divStyle =
        "bg-white p-4 rounded-md shadow-sm flex flex-col items-center justify-center space-y-2 hover:bg-zinc-100 transition-all ease-in duration-200";
    const headerStyle = "text-[#244d3fFF] text-[32px] font-semibold ";
    const peraStyle = "text-lg text-[#64748bFF]";
    return (
        <div className="max-w-[1110px] mx-auto mb-[20px] md:mb-[30px] mb-[40px] grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-1 md:px-0 text-center">
            <div className={divStyle}>
                <h2 className={headerStyle}>10</h2>
                <p className={peraStyle}>Total Friends</p>
            </div>
            <div className={divStyle}>
                <h2 className={headerStyle}>3</h2>
                <p className={peraStyle}>On Track</p>
            </div>
            <div className={divStyle}>
                <h2 className={headerStyle}>6</h2>
                <p className={peraStyle}>Need Attention</p>
            </div>
            <div className={divStyle}>
                <h2 className={headerStyle}>12</h2>
                <p className={peraStyle}>Interaction This Month</p>
            </div>
        </div>
    );
};

export default Counter;

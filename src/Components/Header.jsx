import { FiPlus } from "react-icons/fi";

const Header = () => {
    return (
        <div className="max-w-[1110px] mx-auto mt-[80px] sm:[100px]  md:mt-[120px] lg:mt-[154px] mb-[20px] md:mb-[40px] flex items-center justify-center flex-col text-center">
            <h2 className="text-4xl md:text-[48px] text-[#1f2937FF] font-bold mb-2 md:mb-4">Friends to keep close in your life</h2>
            <p className="text-[#64748bFF] w-full lg:max-w-[50%] mb-4 md:mb-8">
                Your personal shelf of meaningful connections. Browse, tend, and
                nurture the relationships that matter most.
            </p>
            <button className="flex items-center gap-1 bg-[#244d3fFF] rounded-md px-4 py-3 text-white font-semibold cursor-pointer">
                <FiPlus  /> Add a Friend
            </button>
        </div>
    );
};

export default Header;

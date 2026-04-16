import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChartLine } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";

const MyNavbar = ({ children, link }) => {
    const pathname = usePathname();

    return (
        <Link href={link}>
            <div
                className={` ${pathname === link ? "bg-[#244d3fFF] font-semibold text-white" : "text-[#64748bFF] font-medium"} flex items-center gap-1 px-4 py-3 rounded-md`}
            >
                {link === "/" ? (
                    <RiHome2Line size={20} />
                ) : link === "/timeline" ? (
                    <IoTimeOutline size={20} />
                ) : link === "/state" ? (
                    <FaChartLine size={20} />
                ) : (
                    ""
                )}{" "}
                {children}
            </div>
        </Link>
    );
};

export default MyNavbar;

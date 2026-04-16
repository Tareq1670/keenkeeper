import Image from "next/image";
import Link from "next/link";

const Card = ({ friend }) => {
    const { id, name, picture, days_since_contact, tags, status } = friend;
    const divStyle =
        "bg-white py-6 rounded-md shadow-sm flex flex-col items-center justify-between space-y-2 hover:bg-zinc-100 hover:-translate-y-1 hover:shadow-md transition-all ease-in duration-200";
    return (
        <Link href={`/friendsdetails/${id}`}>
            <div className={divStyle}>
                <div>
                    <Image
                        src={picture}
                        height={80}
                        width={80}
                        alt={name}
                        className="h-[80px] w-[80px] rounded-full object-cover"
                    />
                </div>
                <h2 className="text-[#1f2937FF] text-[20px] font-semibold">
                    {name}
                </h2>
                <p className="text-[#64748bFF] text-[12px]">{days_since_contact}d ago</p>
                <div className="flex items-center flex-wrap text-center mt-2 justify-center gap-2">
                    {tags.map((tag, i) => (
                        <p
                            className="h-auto w-auto py-[6px] px-[8px] font-medium text-[12px] badge bg-[#bcffd3] rounded-full uppercase text-black"
                            key={i}
                        >
                            {tag}
                        </p>
                    ))}
                </div>
                <p
                    className={`text-white text-[12px] font-medium badge ${status.toLowerCase() === "overdue" ? "bg-red-500" : status.toLowerCase() === "almost due" ? "bg-yellow-500" : status.toLowerCase() === "on-track" ? "bg-[#244d3fFF]" : ""} h-auto w-auto py-[6px] px-[8px] capitalize rounded-full`}
                >
                    {status}
                </p>
            </div>
        </Link>
    );
};

export default Card;

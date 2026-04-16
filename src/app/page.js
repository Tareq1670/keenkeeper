import Counter from "@/Components/Counter";
import Friends from "@/Components/Friends";
import Header from "@/Components/Header";
import { Suspense } from "react";
import { ClipLoader } from "react-spinners";

export default function Home() {
    const promiseData = fetch(
        "https://keenkeeper-ten.vercel.app/friendsdata.json",{cache:"no-store"}
    ).then((res) => res.json());
    return (
        <div>
            <Header />
            <Counter />
            <hr className="border border-[#e9e9e9FF] my-10 max-w-[1110px] mx-auto" />
            <Suspense
                fallback={
                    <div className="min-h-[400px] max-w-[1110px] mx-auto flex items-center justify-center">
                        <div>
                            <ClipLoader color="#14a326" />
                        </div>
                    </div>
                }
            >
                <Friends promiseData={promiseData} />
            </Suspense>
        </div>
    );
}

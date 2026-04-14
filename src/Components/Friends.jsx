import { Suspense, use } from "react";
import Card from "./Card";

const Friends = ({promiseData}) => {
    const friendsData = use(promiseData);
    return (
        <div className="max-w-[1110px] mx-auto px-1 sm:px-0 mb-[50px] sm:mb-[60px] md:mb-[80px]">
            <h2 className="text-[#1f2937FF] text-2xl font-semibold mb-4">Your Friends</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {
                    friendsData.map(friend => <Card key={friend.id} friend={friend}/>)
                }
            </div>
        </div>
    );
};

export default Friends;
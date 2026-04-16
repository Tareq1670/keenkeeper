import FriendsDetailsPage from "@/Components/Details";

const friendsDataPromise = async () => {
    const res = await fetch(
        "https://keenkeeper-ten.vercel.app/friendsdata.json",{cache:"no-store"}
    );
    return res.json();
};
const allData = await friendsDataPromise();

export async function generateMetadata({ params }) {
    const { id } = await params;

    const isFind = allData.find((data) => data.id === Number(id));

    return {
        title: isFind ? `${isFind?.name} || Details` : "Friends is not found!",
        description: isFind?.bio,
    };
}

const page = () => {
    return (
        <div>
            <FriendsDetailsPage allData={allData} />
        </div>
    );
};

export default page;

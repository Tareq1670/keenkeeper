import FriendsDetailsPage from "@/Components/Details";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const res = await fetch(
        "https://keenkeeper-ten.vercel.app/friendsdata.json",{cache:"no-store"});
    const allData = await res.json();
    const isFind = allData.find((data) => data.id === Number(id));
    console.log(allData);

    return {
        title: isFind ? `${isFind?.name} || Details` : "Friends is not found!",
        description: isFind?.bio,
    };
}

const page = () => {
    return (
        <div>
            <FriendsDetailsPage />
        </div>
    );
};

export default page;

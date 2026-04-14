import Counter from "@/Components/Counter";
import Friends from "@/Components/Friends";
import Header from "@/Components/Header";
import { Suspense } from "react";


export default  function Home() {
  const promiseData = fetch("http://localhost:3000/friendsData.json").then(res => res.json());
  return (
    <div>
      <Header/>
      <Counter/>
      <hr className="border border-[#e9e9e9FF] my-10 max-w-[1110px] mx-auto" />
      <Suspense fallback={<span>Loading...</span>}>
        <Friends promiseData={promiseData}/>
      </Suspense>
    </div>
  );
}

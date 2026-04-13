import Counter from "@/Components/Counter";
import Header from "@/Components/Header";


export default function Home() {
  return (
    <div>
      <Header/>
      <Counter/>
      <hr className="border border-[#e9e9e9FF] my-10 max-w-[1110px] mx-auto" />
    </div>
  );
}

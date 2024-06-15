import { RecoilRoot } from "recoil";

import Navbar from "@/MyComponents/Navbar";
import Hero from "@/MyComponents/Hero";

function App() {
  return (
    <RecoilRoot>
      <div className="w-[100dvw] h-[100dvh] overflow-x-hidden overflow-y-auto relative">
        <Navbar />
        <Hero />
      </div>
    </RecoilRoot>
  );
}

export default App;

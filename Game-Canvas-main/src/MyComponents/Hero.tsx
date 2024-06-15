import HeroVideo from "@/assets/hero-opener.mp4";
import { useRecoilValue } from "recoil";
import { gamesData } from "@/atom/gameData";
import isMobile from "@/utils/isMobile";

function Hero() {
  return (
    <div className="absolute w-full h-[120%] lg:h-full bg-zinc-900">
      <div className="h-[30dvh] lg:h-full w-full absolute">
        <video
          muted
          autoPlay
          loop
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={HeroVideo}
        ></video>
        <div className="absolute text-white flex flex-col font-[600] text-[3vw] left-[2vw] bottom-[10vw] opacity-100 z-10">
          <h2>Play Any Type of Games Online</h2>
          <h2>Without Overhead of Downloading</h2>
        </div>
        <div className="absolute hover:shadow-[0px_0px_10px_5px_#bc3360] border-2 border-[#bc3360] text-white flex justify-center items-center left-[2vw] bottom-[5vw] opacity-100 z-10">
          <button className="px-[1vw] py-[0.3vw] text-[2vw] font-[700]">
            Play Now
          </button>
        </div>
      </div>
      {isMobile() && (
        <div className="w-full relative top-[30dvh]">
          <HotGamesForMobile />
        </div>
      )}
    </div>
  );
}

export function HotGamesForMobile() {
  const gameDataR = useRecoilValue(gamesData);

  return (
    <div className="w-full h-full flex flex-wrap gap-[1vw]">
      {gameDataR.map((item, index) => (
        <div
          key={index}
          className="border-[1px] border-zinc-700 w-full rounded-md overflow-hidden p-[1vw]"
        >
          <a href={item.href} className="flex justify-around items-center space-x-2 group">
            <img
              src={item.src}
              width={140}
              height={70}
              alt={item.title}
              className="flex-shrink-0 object-cover object-center rounded-md shadow-2xl scale-1 group-hover:scale-[1.05] transition-all duration-300"
            />
            <div>
              <h4 className="text-xl font-bold mb-1 text-white group">
                {item.title}
              </h4>
              <p className="text-sm max-w-[10rem] text-neutral-300 group">
                {item.description}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Hero;

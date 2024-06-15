import { useState } from "react";
import { useRecoilValue } from "recoil";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";

import { gamesData } from "@/atom/gameData";

import logo from "#/public/logo.png";
import isMobile from "@/utils/isMobile";

function Navbar() {
  const gameDataR = useRecoilValue(gamesData);

  const [active, setActive] = useState<string | null>(null);
  const blurBackground = "bg-black/60 backdrop-blur-lg";
  return (
    <div
      className={`fixed pr-[7vw] lg:pr-0 z-[999] w-full flex items-center justify-between ${blurBackground}`}
    >
      <div
        id="logo"
        className="w-[5vw] h-[5vw] lg:w-[3vw] lg:h-[3vw] m-[1vw] mr-0"
      >
        <img
          src={logo}
          alt="logo"
          className="w-full h-full object-cover object-center cursor-pointer"
          onClick={() => window.location.reload()}
        />
      </div>
      {!isMobile() && (
        <div
          id="deviderL"
          className="bg-zinc-500 w-[0.2vw] mx-[1vw] h-[3vw] rounded-lg"
        ></div>
      )}
      <div className="w-full z-50 flex items-center">
        <div
          className="font-['Sixtyfour'] text-[4vw] lg:text-[2vw] text-white mx-[1vw] cursor-pointer hover:text-[#dadada]"
          onClick={() => window.location.reload()}
        >
          GameCanvas
        </div>
        {!isMobile() && (
          <Menu
            setActive={setActive}
            className="flex justify-end gap-[3vw] ml-[5vw]"
          >
            <MenuItem
              setActive={setActive}
              active={active}
              item="Services"
              className={blurBackground}
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/trending-games">
                  Play Trending Games
                </HoveredLink>
                <HoveredLink href="/top-games">Top Games</HoveredLink>
                <HoveredLink href="/seo">Upload Your Game</HoveredLink>
                <HoveredLink href="/contect">Contect Us</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Hot Games"
              className={blurBackground}
            >
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                {gameDataR.map((item, index) => (
                  <ProductItem
                    key={index}
                    title={item.title}
                    href={item.href}
                    src={item.src}
                    description={item.description}
                  />
                ))}
              </div>
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Pricing"
              className={blurBackground}
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        )}
      </div>
      {!isMobile() && (
        <div
          id="deviderR"
          className="bg-zinc-500 w-[0.2vw] mx-[1vw] h-[3vw] rounded-lg"
        ></div>
      )}
      <div
        id="log-sign"
        className="flex my-[1vw] mx-[2vw] ml-0 w-1/6 items-center justify-around gap-[2vw] lg:gap-[1vw]"
      >
        <button className="text-white hover:bg-zinc-900 rounded-lg py-[0.2vw] px-[0.5vw]">
          SignUp
        </button>
        <button className="inline-flex animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-[1vw] py-[0.3vw] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          LogIn
        </button>
      </div>
    </div>
  );
}

export default Navbar;

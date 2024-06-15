import { atom } from "recoil";

import pimg from "@/assets/game-img/prathmesh-f-game.png";
import himg from "@/assets/game-img/harsh-f-game.jpg";
import kimg from "@/assets/game-img/kaushik-f-game.jpg";
import primg from "@/assets/game-img/priya-f-game.png";
import rimg from "@/assets/game-img/raman-f-game.webp";

export const gamesData = atom({
    key: "gamesData", // unique ID (with respect to other atoms/selectors)
    default: [
      {
        title: "Dino Clone Game",
        description: "Clone of Dino jump game but with AI twist",
        href: "https://kaushiksahu18.github.io/first-game-jump/",
        src: kimg,
      },
      {
        title: "College Game",
        description: "Dino Clone but college showcase",
        href: "https://kaushiksahu18.github.io/prathmesh-game/",
        src: pimg,
      },
      {
        title: "Hit the Pickachu Game",
        description: "Hit the Picachu Pockemon",
        href: "https://prathmeshrai0.github.io/Pokemon-the-game/",
        src: himg,
      },
      {
        title: "Arrange Numbers",
        description: "Arrange numbers while listning your-my-spacel",
        href: "https://prathmeshrai0.github.io/Sliding-Puzzle-Game-JS-main/",
        src: rimg,
      },
      {
        title: "Guess the Number",
        description: "Guess the Number",
        href: "https://prathmeshrai0.github.io/suggest-the-number/",
        src: primg,
      },
    ], // default value (aka initial value)
  });
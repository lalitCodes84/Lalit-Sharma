import React from "react";
import { navMenus } from "../utils/data";

function Navbar() {
  return (
    <header className="bg-optimusBlue text-optimusWhite text-center text-4xl p-2 flex justify-between px-10 fixed w-[100vw]">
      <span className="font-deceptibotsHalftone text-[2vw] p-1 ">
        Lalit Sharma
      </span>
      <nav className="flex gap-x-6  items-center font-megatronCondensed text-[1vw]">
        {navMenus.map((item, index) => (
          <a href={`#${item.id}`} key={index}>
            {item.menu}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;

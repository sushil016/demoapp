import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="w-screen h-[50px] bg-zinc-300">
      <div className=" flex flex-row bg-zinc-200 justify-between mx-48 py-3.5 rounded-lg">
          <Link className="px-3"href="/">StudyNotion</Link>
        <div className="">
          <Link className="p-3" href="/About">About</Link>
          <Link className="p-3" href="/contact">contact</Link>
          <Link className="p-3" href="/dashboard">dashboard</Link>
          <Link className="p-3" href="/login">login</Link>
          <Link className="p-3" href="/signup">signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

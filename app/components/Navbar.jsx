"use client";

import React,{useState} from "react";
import Link from "next/link";
import Navlink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MenuOverlay } from "./MenuOverlay";
const navlinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const Navbar = () =>{

  const [navOpen, setnavOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-8 bg-[#121212] bg-opacity-100" >
      <div className="flex flex-wrap items-center justify-between mx-auto px-5 py-5">
        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
          LOGO
        </Link>
        <div className="mobile-menu  block md:hidden">
        {
          navOpen ? (
            <button onClick={() => setnavOpen(false)} className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white">
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setnavOpen(true)} className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          )
        }

        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-white">
            {navlinks.map((link, index) => (
              <li key={index}>
                <Navlink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navOpen ? <MenuOverlay links={navlinks} /> : null}
    </nav>
  );
}
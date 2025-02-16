"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const NavBar: React.FC = () => {  
  const pathname = usePathname();
  const navigation: NavigationItem[] = [
    { name: "Home", href: "/", current: true },
    { name: "Services", href: "/", current: false },
    { name: "Portfolio", href: "expWorks", current: false },
    { name: "About Me", href: "about-me", current: false },
  ];

  const [isClicked1, setIsClicked1] = useState<boolean>(false);
  const [isClicked2, setIsClicked2] = useState<boolean>(false);
  const [scrollyValue, setScrollyValue] = useState<number>(0);
  const [activeLink, setActiveLink] = useState<string>(pathname);

  const mobileMenuRef1 = useRef<HTMLDivElement>(null);
  const mobileMenuRef2 = useRef<HTMLDivElement>(null);
  const toggleButtonRef1 = useRef<HTMLButtonElement>(null);
  const toggleButtonRef2 = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  useEffect(() => {
    const scrollHandler = (): void => {
      setScrollyValue(window.scrollY);
    };

    const clickOutsideHandler = (event: MouseEvent): void => {
      const isOutsideMenu1 = mobileMenuRef1.current && !mobileMenuRef1.current.contains(event.target as Node);
      const isOutsideButton1 = toggleButtonRef1.current && !toggleButtonRef1.current.contains(event.target as Node);
      const isOutsideMenu2 = mobileMenuRef2.current && !mobileMenuRef2.current.contains(event.target as Node);
      const isOutsideButton2 = toggleButtonRef2.current && !toggleButtonRef2.current.contains(event.target as Node);

      if (isOutsideMenu1 && isOutsideButton1) {
        setIsClicked1(false);
      }
      if (isOutsideMenu2 && isOutsideButton2) {
        setIsClicked2(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    document.addEventListener("mousedown", clickOutsideHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, []);

  const handleToggleMenu1 = () => {
    setIsClicked1(!isClicked1);
    setIsClicked2(false); // Close the other menu when opening this one
  };

  const handleToggleMenu2 = () => {
    setIsClicked2(!isClicked2);
    setIsClicked1(false); // Close the other menu when opening this one
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = href === activeLink;
    
    return (
      <Link
        href={href}
        className="relative group px-3 py-2 transition-colors duration-300"
        onClick={() => setActiveLink(href)}
      >
        <span className={`relative z-10 ${isActive ? 'text-white' : 'text-secondary_txt group-hover:text-white'}`}>
          {children}
        </span>
        <motion.div
          className="absolute inset-0 bg-blue_color rounded-full -z-10 opacity-0 group-hover:opacity-100"
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        />
      </Link>
    );
  };

  const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = href === activeLink;
    
    return (
      <Link
        href={href}
        onClick={() => setActiveLink(href)}
        className={`font-dana-regular no-underline block w-full p-2 rounded-lg transition-all duration-300 
          ${isActive 
            ? 'text-white bg-blue_color' 
            : 'text-secondary_txt hover:text-white hover:bg-white/10'
          }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="w-full flex justify-center border-white/20">
      <div
        className={`${
          scrollyValue > 0 ? "-translate-y-72" : "translate-y-0"
        } duration-500  w-full fixed  border-b border-white/20 z-10`}
      >
        <div 
          style={{backdropFilter:'blur(10px)'}}
          className="sm:container mx-auto p-3 flex flex-col  md:flex-row md:items-center justify-between text-white"
        >
          <div className="flex items-center h-max justify-between">
            <Link 
              href={"/"}
              className="font-black text-3xl relative group overflow-hidden"
            >
              <span className="relative z-10 bg-gradient-to-r from-blue_color to-purple-500 bg-clip-text text-transparent">S</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue_color to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>
            <ul className="hidden md:flex mb-0 ml-5 items-center space-x-2">
              {navigation.map((navLink, index) => (
                <li key={index}>
                  <NavLink href={navLink.href}>{navLink.name}</NavLink>
                </li>
              ))}
            </ul>
            <button
              ref={toggleButtonRef1}
              onClick={handleToggleMenu1}
              className="md:hidden hover:bg-white/10 p-2 rounded-full transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                color="white"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <button className="py-2 hidden md:inline-block px-6 rounded-full transition-all duration-300 group relative overflow-hidden
            bg-gradient-to-r from-blue_color to-purple-500 hover:from-blue-600 hover:to-purple-600">
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Link
              href="https://t.me/soheil_feizi"
              className="no-underline font-dana-regular text-white relative z-10"
            >
              Request Project
            </Link>
          </button>
        </div>

        {/* mobile menu */}
        <div
          ref={mobileMenuRef1}
          style={{backdropFilter:'blur(10px)'}}
          className={`${
            isClicked1 ? "h-max py-4  " : "h-0 py-0 overflow-hidden"
          }  border  text-white  backdrop-blur-2xl z-50 border-white/20 absolute w-full left-0 duration-300 ease-in-out md:hidden`}
        >
          <div className="sm:container mx-auto">
            <ul className="mb-0 flex flex-col items-start px-4 space-y-2">
              {navigation.map((navLink, index) => (
                <li key={index} className="w-full">
                  <MobileNavLink href={navLink.href}>{navLink.name}</MobileNavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Scrolled navbar */}
      <div
        className={`${
          scrollyValue > 0 ? "translate-y-7" : "-translate-y-72"
        } duration-500 fixed w-full z-40`}
      >
        <div className="container mx-auto flex justify-center">
          <div className="backdrop-blur-lg flex justify-between bg-black/50 border text-white border-white/20 p-3 px-8 rounded-full 2xs:w-[40vw] md:w-max lg:w-max z-10 flex-col md:flex-row md:items-center hover:bg-black/60 transition-colors duration-300">
            <div className="flex items-center h-max justify-between">
              <Link 
                href={"/"}
                className="text-4xl font-black relative group overflow-hidden"
              >
                <span className="relative z-10 bg-gradient-to-r from-blue_color to-purple-500 bg-clip-text text-transparent">S</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue_color to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Link>
              <ul className="hidden md:flex mb-0 ml-5 items-center space-x-2">
                {navigation.map((navLink, index) => (
                  <li key={index}>
                    <NavLink href={navLink.href}>{navLink.name}</NavLink>
                  </li>
                ))}
              </ul>
              <button
                ref={toggleButtonRef2}
                onClick={handleToggleMenu2}
                className="md:hidden hover:bg-white/10 p-2 rounded-full transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  color="white"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            <button className="py-2 ml-8 hidden md:inline-block px-6 rounded-full transition-all duration-300 group relative overflow-hidden
              bg-gradient-to-r from-blue_color to-purple-500 hover:from-blue-600 hover:to-purple-600">
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Link
                href="#"
                className="no-underline font-dana-regular text-white relative z-10"
              >
                Request Project
              </Link>
            </button>
          </div>
        </div>

        {/* mobile menu for scrolled navbar */}
        <div
          ref={mobileMenuRef2}
          className={`${
            isClicked2 ? "h-max py-4 border border-t-0 pt-8" : "h-0 py-0 overflow-hidden"
          } backdrop-blur-2xl text-white w-[50vw] rounded-2xl mx-auto -mt-4 border-white/20 duration-300 ease-in-out md:hidden`}
        >
          <div className="container mx-auto">
            <ul className="mb-0 flex flex-col items-start px-4 space-y-2">
              {navigation.map((navLink, index) => (
                <li key={index} className="w-full">
                  <MobileNavLink href={navLink.href}>{navLink.name}</MobileNavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
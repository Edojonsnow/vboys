"use client";
import Image from "next/image";
import Link from "next/link";
import { IconX, IconMenu2 } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
    { name: "Virtual", href: "/" },
    { name: "Contact", href: "/" },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/">
            <div className="relative w-12 h-8 md:w-24 md:h-24 hover:scale-105 transition-transform">
              <Image src="/vblogo.png" alt="logo" fill className="object-contain" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white font-outfit text-sm uppercase tracking-widest hover:text-neon-yellow transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-yellow transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/events"
              className="bg-neon-yellow text-black font-bold uppercase text-xs px-6 py-3 rounded-full hover:bg-white hover:scale-105 transition-all duration-300"
            >
              Get Tickets
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-white hover:text-neon-yellow transition-colors"
            >
              <IconMenu2 size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-white hover:text-neon-yellow transition-colors hover:rotate-90 duration-300"
        >
          <IconX size={40} />
        </button>

        <div className="flex flex-col gap-8 items-center">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white font-outfit font-bold text-4xl uppercase tracking-wider hover:text-neon-yellow transition-all hover:scale-110"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;

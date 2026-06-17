"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";


const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Global Coverage", href: "/global-coverage" },
  { label: "Plans & Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/Zoiko-Local-Logo.png"
            alt="Zoiko Local"
            width={180}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href="#"
                  className="text-sm md:text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/signin"
            className="text-sm md:text-base font-medium text-muted-foreground hover:text-foreground"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-[#F26B45] px-6 py-3 text-sm md:text-base font-semibold text-white transition hover:opacity-90"
          >
            Start Free
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label="Menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="space-y-4 px-4 py-6">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-sm md:text-base font-medium"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="/signin"
                className="rounded-lg border px-4 py-3 text-center"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                className="rounded-lg bg-[#F26B45] px-4 py-3 text-center font-semibold text-white"
              >
                Start Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
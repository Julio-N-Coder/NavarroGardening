"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/Button/button";
import { usePathname } from "next/navigation";

export default function ButtonList() {
  const pathname = usePathname();

  return (
    <div className="inline-block ml-4 bg-green-900 p-1 rounded-md ">
      <Link className="link" href="/">
        <Button
          className={`${
            pathname === "/" && "bg-green-400 text-black hover:bg-green-300"
          }`}
        >
          Home
        </Button>
      </Link>
      <Link className="link" href="/about">
        <Button
          className={`${
            pathname === "/about" &&
            "bg-green-400 text-black hover:bg-green-300"
          }`}
        >
          About
        </Button>
      </Link>
      <Link className="link" href="/contact-me">
        <Button
          className={`${
            pathname === "/contact-me" &&
            "bg-green-400 text-black hover:bg-green-300"
          }`}
        >
          Contact Me
        </Button>
      </Link>
    </div>
  );
}

"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/Button/button";
import { usePathname } from "next/navigation";

export default function ButtonList() {
  const pathname = usePathname();

  return (
    <div className="inline-block ml-4 bg-green-900 p-1 rounded-md ">
      <Button
        asChild
        className={`${
          pathname === "/" && "bg-green-400 text-black hover:bg-green-300"
        }`}
      >
        <Link href="/">Home</Link>
      </Button>

      <Button
        asChild
        className={`${
          pathname === "/about" && "bg-green-400 text-black hover:bg-green-300"
        }`}
      >
        <Link href="/about">About</Link>
      </Button>

      <Button
        asChild
        className={`${
          pathname === "/contact-me" &&
          "bg-green-400 text-black hover:bg-green-300"
        }`}
      >
        <Link href="/contact-me">Contact Me</Link>
      </Button>
    </div>
  );
}

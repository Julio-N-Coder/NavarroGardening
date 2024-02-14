"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import logo from "@/../public/navarro-gardening-logo-croped-small.jpg";
import React from "react";
import ButtonList from "@/components/Button/ButtonList";
import { imageLoader } from "@/loader";

export default function Header() {
  return (
    <header className={`${styles.header} header`}>
      <div className={styles.titleLogo}>
        <h1 className={`${styles.title} font-bold`}>Navarro Gardening</h1>
        <Link href="/" className={styles.logoContainer}>
          <Image
            loader={imageLoader}
            className={styles.logo}
            src={logo}
            placeholder="blur"
            width={100}
            height={100}
            alt="Navarro Gardening Logo"
          />
        </Link>
      </div>
      <ButtonList />
    </header>
  );
}

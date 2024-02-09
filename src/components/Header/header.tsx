import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import logo from "@/../public/navarro-gardening-logo-croped-small.jpg";
import React from "react";

export default function Header() {
  return (
    <header className={`${styles.header} header`}>
      <div className={styles.titleLogo}>
        <h1 className={styles.title}>Navarro Gardening</h1>
        <Link href="/" className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={logo}
            placeholder="blur"
            width={100}
            height={100}
            alt="Navarro Gardening Logo"
          />
        </Link>
      </div>
      <nav className={styles.navbar}>
        <Link className="link" href="/">
          Home
        </Link>
        <Link className="link" href="/about">
          About
        </Link>
        <Link className="link" href="/contact-me">
          Contact Me
        </Link>
      </nav>
    </header>
  );
}

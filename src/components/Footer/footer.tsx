import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import ButtonList from "@/components/Button/ButtonList";

export default function Footer() {
  return (
    <div className={`${styles.footer} footer`}>
      <div className="ml-4"></div>
      <nav className={styles.navbar}>
        <ButtonList />
      </nav>
    </div>
  );
}

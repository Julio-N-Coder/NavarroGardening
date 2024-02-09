import { GeistSans } from "geist/font";
import "./globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import React from "react";

export const metadata = {
  title: "Navarro Gardening",
  description:
    "Navarro Gardening is a small landscaping buisness in the slo county area.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <div className="page-container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

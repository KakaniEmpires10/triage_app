'use client'

import "@/styles/globals.css";
import SideBar from "@/components/SideBar/SideBar";
import { Poppins } from "next/font/google";
import TopBar from "@/components/SideBar/TopBar";
import { useState, useEffect } from "react";
import Provider from "@/components/provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
});

export const metadata = {
  title: "Dashboard"
};

function DashboardLayout({ children }) {

  const [showNav, setShowNav] = useState(true);
  const [mobile, setMobile] = useState(false);

  function handleSize() {
    if (innerWidth <= 840) {
      setShowNav(false);
      setMobile(true);
    } else {
      setShowNav(true);
      setMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != 'undefined') {
      addEventListener("resize", handleSize);
    }
    return () => {
      removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <html lang="en">
      <body className={poppins.className}>
      {/* <Provider> */}
        <SideBar stat = {mobile} />
        <main className={`${mobile ? 'ml-0' : 'ml-[250px]'} transition-all duration-700`}>
          <TopBar />
          <div className="p-10">{children}</div>
        </main>
      {/* </Provider> */}
      </body>
    </html>
  );
}

export default DashboardLayout;

import type { Metadata } from "next";
import React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

import { onestSans } from "@/common/styles/fonts";
import "@/common/styles/globals.css"
import { SideBar } from "@/components/navigation/sideBar/sideBar";
import { NavBar } from "@/components/navigation/navbar/navBar";


export const metadata: Metadata = {
  title: "Rohit",
  description: "Portfolio",
  keywords: "",
  icons: {
    icon: "/icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${onestSans.variable} 
        font-sans
      `}
    >
      <body className="bg-neutral-50">
        <div className="w-full h-full flex justify-center">
          <div className="p-5 md:px-1 md:pt-10 flex w-full max-w-[1150px]">
            <SideBar />
            <div className="w-full flex-col md:flex-row gap-8 max-w-[930px]">
              <NavBar />
              <div className="px-2 md:py-2 md:px-6 lg:px-11 space-y-7 md:space-y-5 text-base/[1.78rem] md:text-base/8 text-neutral-800 ">
              {children}
              </div>
            </div>
          </div>
        </div>
        <GoogleAnalytics gaId="G-5SG5WZET44" />
      </body>
    </html>
  );
}


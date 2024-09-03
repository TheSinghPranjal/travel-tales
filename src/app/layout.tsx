'use client'
import NavApp from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import "./globals.css";
import store from "./reduxStore/store";


// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='w-full'>
        <NavApp />
        <div className="max-w-[1478px] flex m-auto">
          <div className="w-full">
            <Provider store={store}>
              {children}
            </Provider>
          </div>
        </div>
      </body>
    </html>
  );
}

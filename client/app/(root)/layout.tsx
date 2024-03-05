import React from "react";
import { Metadata } from "next";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: {
    template: "%s | Pokemon Go Manager",
    default: "Pokemon Go Manager",
  },
  description: "Home page Pokemon Go Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen text-primary-text">
      <Sidebar />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}

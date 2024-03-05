"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  IconPokeball,
  IconLayoutDashboard,
  IconBolt,
} from "@tabler/icons-react";

import Logo from "@/public/logo.svg";

interface sidebarItemInterface {
  name: string;
  path: string;
  icon?: React.ReactNode;
}

const items: sidebarItemInterface[] = [
  {
    name: "dashboard",
    path: "/dashboard",
    icon: <IconLayoutDashboard />,
  },
  {
    name: "pokemon",
    path: "/pokemon",
    icon: <IconPokeball />,
  },
  {
    name: "move",
    path: "/move",
    icon: <IconBolt />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col gap-2 border-r">
      <div className="flex items-center justify-center gap-2 px-6 py-4">
        <Image src={Logo} alt="" height={32} />
        <span className="text-2xl font-bold uppercase">pogom</span>
      </div>
      <hr />
      <ul className="flex flex-col">
        {items.map((item, index) => {
          return (
            <li key={index} className="flex w-full">
              <Link
                href={item.path}
                className={`flex w-full items-center justify-start gap-2 px-6 py-3 capitalize ${pathname == item.path ? "text-white hover:text-white bg-primary" : ""} hover:text-primary`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

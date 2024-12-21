"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshCw, Plus } from "lucide-react";
import { IoChevronDownOutline } from "react-icons/io5";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { mainNavItems, bottomNavItems } from "./main-nav";
import { RepositoryCard } from "./repo-card";
import { CiSearch } from "react-icons/ci";

const repositories = [
  {
    name: "design-system",
    language: "React",
    size: "7320 KB",
    isPrivate: false,
    updatedAt: new Date("2024-12-20"),
    languageColor: "#61dafb",
  },
  {
    name: "codeant-ci-app",
    language: "Javascript",
    size: "5871 KB",
    isPrivate: true,
    updatedAt: new Date("2024-12-19"),
    languageColor: "#f7df1e",
  },
  {
    name: "analytics-dashboard",
    language: "Python",
    size: "4521 KB",
    isPrivate: true,
    updatedAt: new Date("2024-12-16"),
    languageColor: "#3776ab",
  },
  {
    name: "mobile-app",
    language: "Swift",
    size: "3096 KB",
    isPrivate: false,
    updatedAt: new Date("2024-12-18"),
    languageColor: "#ffac45",
  },
  {
    name: "e-commerce-platform",
    language: "Java",
    size: "6210 KB",
    isPrivate: true,
    updatedAt: new Date("2024-12-15"),
    languageColor: "#b07219",
  },
  {
    name: "blog-website",
    language: "HTML/CSS",
    size: "1876 KB",
    isPrivate: false,
    updatedAt: new Date("2024-12-17"),
    languageColor: "#e34c26",
  },
  {
    name: "social-network",
    language: "PHP",
    size: "5432 KB",
    isPrivate: true,
    updatedAt: new Date("2024-12-14"),
    languageColor: "#4F5D95",
  },
];

export default function Page() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader className="border-b p-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="CodeAnt AI Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-semibold">CodeAnt AI</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <div className="flex items-center justify-between p-6 bg-zinc-100 w-30 h-30 ">
                <p>UserName</p>
                <IoChevronDownOutline />
              </div>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive}>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t">
            <SidebarMenu>
              {bottomNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href="/">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 p-5">
          <div className=" md:w-[76rem] lg:w-[76rem]   border border-gray-200 rounded-lg shadow-lg ">
            <header className="flex flex-wrap md:flex-nowrap items-center gap-4   p-5">
              <SidebarTrigger className="md:hidden" />
              <div className="flex-1">
                <h1 className="text-lg md:text-xl font-semibold">
                  Repositories
                </h1>
                <p className="text-xs md:text-sm text-gray-500">
                  33 total repositories
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  className="h-8 bg-white text-black text-base  hover:bg-gray-100 hover:scale-105 "
                >
                  <RefreshCw className="h-4 w-4" />
                  Refresh All
                </Button>
                <Button
                  size="sm"
                  className="h-8 bg-blue-600 text-base  hover:bg-blue-700 hover:scale-105"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Repository
                </Button>
              </div>
            </header>

            <div className="">
              <div className="relative mb-6 px-6">
                <Input
                  placeholder="Search Repositories"
                  className="w-80 md:max-w-md pl-10 rounded-md border border-gray-300 focus:ring focus:ring-blue-500 "
                />
                <CiSearch className="absolute left-7 top-2.5 h-4 w-4 text-zinc-700" />
              </div>
              <div className="border-gray-200 border-b" />

              <div className=" cursor-pointer  bg-white ">
                {repositories.map((repo) => (
                  <RepositoryCard contributors={[]} key={repo.name} {...repo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

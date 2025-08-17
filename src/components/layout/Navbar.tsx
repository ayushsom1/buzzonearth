"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ChevronDown, Users, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const studentProgramsItems = [
    { name: "Young Forest Ambassador Program", href: "/student-programs/young-forest-ambassador-program" },
    { name: "Youth Leadership Program", href: "/student-programs/youth-leadership-program" },
    { name: "MUN Conferences", href: "/student-programs/mun-conferences" },
    { name: "Climate Hackathons", href: "/student-programs/climate-hackathons" },
    { name: "Volunteer", href: "/student-programs/volunteer" },
  ];

  const nationalConferencesItems = [
    { name: "Conference 2024", href: "/national-conferences/conference-2024" },
    { name: "Conf. 2024 Winners", href: "/national-conferences/conference-2024-winners" },
  ];

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Global Schools Affiliation", 
      href: "/affliation", 
      dropdown: true, 
      items: [
      { name: "Why Apply", href: "/why-apply" },
    ]},
    { name: "Partners and Affiliates", href: "/partners-and-affiliates" },
    { name: "GSCA-GSLI Accreditation", href: "/accreditation" },
    {
      name: "Student Programs",
      href: "/student-programs",
      dropdown: true,
      items: studentProgramsItems,
    },
    {
      name: "National Conferences",
      href: "/national-conferences",
      dropdown: true,
      items: nationalConferencesItems,
    },
    { name: "Global Schools Awards", href: "/awards" },
    { name: "Global Schools Ranking", href: "/Ranking" }, 
    { name: "Governing Council", href: "/governing-council" },
  ];

  return (
    <>
      <div className="relative">
        {/* Top Strip - BuzzOnEarthYOUTH and quick links - Fixed */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-gray-50 py-1 px-2 sm:px-4 lg:px-6 shadow-sm">
          <div className="max-w-[100vw] mx-auto flex justify-between items-center">
            <div className="text-sm font-medium text-gray-700">
              BuzzOnEarthYOUTH
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/parents-corner" className="flex items-center text-xs sm:text-sm text-gray-700 hover:text-primary">
                <Users className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Parents Corner</span>
              </Link>
              <Link href="/student-login" className="flex items-center text-xs sm:text-sm text-gray-700 hover:text-primary">
                <GraduationCap className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Student Login</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Spacer for top strip */}
        <div className="h-8"></div>
        
        {/* Middle Strip - Logos and heading - Visible on top, disappears on scroll */}
        <div className="border-b border-gray-100 py-6 px-2 sm:px-4 lg:px-6 bg-white">
          <div className="max-w-[100vw] mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center">
                <div className="relative flex items-center justify-center mr-4">
                  <Image 
                    src="/images/logos/top1.webp" 
                    alt="IndiaMUN united nation" 
                    width={120} 
                    height={120} 
                    className="object-contain" 
                  />
                </div>
                <div className="relative flex items-center justify-center">
                  <Image 
                    src="/images/logos/top2.webp" 
                    alt="Global schools" 
                    width={140} 
                    height={140} 
                    className="object-contain" 
                  />
                </div>
              </Link>
            </div>
              <div className="hidden sm:block text-sm">
                INDIA’S YOUTH FOR CLIMATE ACTION & INNOVATION
              </div>
          </div>
        </div>
        
        {/* Bottom Strip - Main Navigation - Fixed */}
        <div className={`fixed ${isMounted ? (isScrolled ? 'top-8' : 'top-[7rem]') : 'top-[7rem]'} left-0 right-0 z-40 p-3 md:p-4 lg:p-1 px-2 sm:px-4 lg:px-6 transition-all duration-300 bg-black ${
          isMounted && isScrolled
            ? "backdrop-blur-md shadow-md"
            : "border-b border-gray-700"
        }`}>
          <div className="w-full  mx-auto">
            <div className="flex items-center justify-center">

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center justify-center flex-wrap space-x-2 xl:space-x-4 2xl:space-x-6 py-2">
                {navItems.map((item) => 
                  item.dropdown ? (
                    <DropdownMenu key={item.name}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className={cn(
                            "flex items-center space-x-1 px-2 xl:px-3 py-1 text-xs xl:text-sm font-medium whitespace-nowrap",
                            pathname.startsWith(item.href)
                              ? "text-white bg-white/20 rounded-md"
                              : "text-gray-200 hover:text-white hover:bg-white/10 rounded-md"
                          )}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center" className="w-56">
                        <DropdownMenuItem asChild>
                          <Link
                            href={item.href}
                            className={`w-full cursor-pointer font-medium ${
                              pathname === item.href
                                ? "text-primary bg-primary/10 rounded-md p-1"
                                : "text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md p-1"
                            }`}
                          >
                            Overview
                          </Link>
                        </DropdownMenuItem>
                        <div className="h-px bg-gray-200 my-1" />
                        {item.items?.map((subItem) => (
                          <DropdownMenuItem key={subItem.name} asChild>
                            <Link
                              href={subItem.href}
                              className={`w-full cursor-pointer ${
                                pathname === subItem.href
                                  ? "text-primary bg-primary/10 rounded-md p-1"
                                  : "text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md p-1"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "px-2 xl:px-3 py-1 text-xs xl:text-sm font-medium rounded-md whitespace-nowrap",
                        pathname === item.href
                          ? "text-white bg-white/20"
                          : "text-gray-200 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </nav>

              {/* Mobile Menu - Now positioned on the right */}
              <div className="absolute right-4 lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[280px] sm:w-[300px] pt-12" title="Menu">
                    <div className="py-4 space-y-4">
                      {navItems.map((item) => (
                        <div key={item.name} className="border-b border-gray-100 p-2">
                          {item.dropdown ? (
                            <div className="space-y-2">
                              <Link
                                href={item.href}
                                className={cn(
                                  "block font-medium text-sm",
                                  pathname === item.href
                                    ? "text-primary bg-primary/10 rounded-md p-1"
                                    : "text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md p-1"
                                )}
                              >
                                {item.name} - Overview
                              </Link>
                              <div className="pl-3 space-y-2 mt-1">
                                {item.items?.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className={cn(
                                      "block text-xs",
                                      pathname === subItem.href
                                        ? "text-primary bg-primary/10 rounded-md p-1"
                                        : "text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md p-1"
                                    )}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              className={cn(
                                "block font-medium text-sm",
                                pathname === item.href
                                  ? "text-primary bg-primary/10 rounded-md p-1"
                                  : "text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md p-1"
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                      <div className="flex justify-around items-center pt-3 border-t border-gray-100">
                        <Link href="/parents-corner" className="flex items-center text-xs text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md p-1">
                          <Users className="h-3 w-3 mr-1.5" />
                          Parents Corner
                        </Link>
                        <Link href="/student-login" className="flex items-center text-xs text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md p-1">
                          <GraduationCap className="h-3 w-3 mr-1.5" />
                          Student Login
                        </Link>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Space for all navbar elements */}
      {/* <div className="h-[6.5rem] md:h-28"></div> */}
    </>
  );
};

export default Navbar; 
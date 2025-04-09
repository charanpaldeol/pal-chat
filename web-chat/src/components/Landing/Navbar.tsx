// file: Navbar.tsx
"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">
        Pal (ਪਲ) Chat
      </div>

      <div className="hidden sm:flex space-x-6">
        <Link href="#features" className="hover:text-blue-600">Features</Link>
        <Link href="/chat" className="hover:text-blue-600">Chat</Link>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger aria-label="Open menu">
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="space-y-4 pt-10">
            <Link href="#features" className="block hover:text-blue-600">Features</Link>
            <Link href="/chat" className="block hover:text-blue-600">Chat</Link>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}


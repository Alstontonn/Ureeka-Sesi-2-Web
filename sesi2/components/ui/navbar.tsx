"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "./button";
 
export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-0 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className = "space-x-20">
            <HoveredLink href="/">Home</HoveredLink>
            <HoveredLink href="/about">About me</HoveredLink>
            <HoveredLink href="/contact">Contact</HoveredLink>
        </div>
        
      </Menu>
    </div>
  );
}
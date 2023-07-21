"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MobileNav } from "@/components/mobile-nav"
import { siteConfig } from "@/config/site"
import { MainNavItem } from "@/types"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()

  return (
    <div className="flex gap-6 md:gap-10 ">
      <div><Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.BeerIcon />
        <span className="hidden text-lg font-extrabold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link></div>
     
    </div>
  )
}



export function MainNav2({ items, children }: MainNavProps){
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)
  return (
    <div className="">
    {items?.length ? (
      <nav className="hidden gap-6 md:flex">
        {items?.map((item, index) => (
          <Link
            key={index}
            href={item.disabled ? "#" : item.href}
            className={cn(
              "flex justify-between items-center sm:text-sm lg:text-lg font-semibold transition-colors hover:text-foreground/80 ",
              item.href.startsWith(`/${segment}`)
                ? "text-foreground"
                : "text-foreground/60",
              item.disabled && "cursor-not-allowed opacity-80"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    ) : null} 
     <button
        className="flex  items-start space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.BeerIcon />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  )
}
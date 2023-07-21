import * as React from "react"
import Link from "next/link"

import { MainNavItem2 } from "@/types"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body"
import { Icons } from "@/components/icons"

interface MobileNavProps {
  items: MainNavItem2[]
  children?: React.ReactNode
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody()

  return (
    <div
      className={cn(
        "grid overflow-auto fixed inset-0 top-16 z-50 grid-flow-row auto-rows-max p-6 pb-32 border shadow-md h-[calc(100vh-4rem)] animate-in slide-in-from-bottom-80 md:hidden"
      )}
    >
      <div className="grid relative z-20 gap-6 p-4 rounded-md border shadow-md bg-popover text-popover-foreground">
        <Link href="/" className="flex items-center space-x-2 border-b">
          <Icons.BeerIcon />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  )
}
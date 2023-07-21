import Link from "next/link"

import { appConfig } from "@/config/app"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav, MainNav2 } from "@/components/main-nav"
//import { SiteFooter } from "@/components/site-footer"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container sticky top-0 z-40 w-full border-b backdrop-blur supports-backdrop-blur:bg-background/60 bg-background/90">
        <div className="flex justify-between items-center py-6 h-20">
          <MainNav items={appConfig.mainNav} />
          <MainNav2  items={appConfig.mainNav2} />
          {/* <nav>
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              Login
            </Link>
          </nav> */}
        </div>
      </header>
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}
    </div>
  )
}
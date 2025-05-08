"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { CATEGORIES } from "@/utils/categories"
import { Categoty } from "@/types/types"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"



export function HeaderNavigation() {
  const pathname = usePathname()
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuContent>
            {/* Content for first menu item */}
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {CATEGORIES.map((category: Categoty) => (
                <ListItem
                  key={category.id}
                  href={`/categories/${category.slug}`}
                >
                  <Button variant="ghost">{category.name}</Button>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          {/* FIX: Use NavigationMenuLink directly with Next.js Link instead of nesting them */}
          <NavigationMenuLink asChild>
            <Link href="/" className={`${navigationMenuTriggerStyle()} ${pathname =='/' ? 'bg-red-500 text-white' : ''}`}>
              Accueil
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link href="/write" className={`${navigationMenuTriggerStyle()} ${pathname =='/write' ? 'bg-red-500 text-white' : ''}`}>
              Write
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link href="/blog" className={`${navigationMenuTriggerStyle()} ${pathname =='/blog' ? 'bg-red-500 text-white' : ''}`}>
              Blogs
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link href="/about" className={`${navigationMenuTriggerStyle()} ${pathname =='/about' ? 'bg-red-500 text-white' : ''}`}>
              A propos
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link href="/posts" className={`${navigationMenuTriggerStyle()} ${pathname =='/posts' ? 'bg-red-500 text-white' : ''}`}>
              Posts
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link href="/contact" className={`${navigationMenuTriggerStyle()} ${pathname =='/contact' ? 'bg-red-500 text-white' : ''}`}>
              Contacts
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"
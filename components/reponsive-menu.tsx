import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Categoty } from "@/types/types"
import { CATEGORIES } from "@/utils/categories"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export function ResponsiveMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className=" md:hidden" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="lg:hidden">
          <SheetTitle >Edit profile</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-2">
          <Link href="/"><Button variant="ghost">Home</Button></Link>
          <p>Categories</p>
          {CATEGORIES.length > 0 ?
            CATEGORIES.map((category: Categoty) => (
              <Link key={category.id} href={`/categories/${category.slug}`}><Button variant="ghost">{category.name}</Button></Link>
            )) : (
              <p>Loading...</p>
            )}

        </div>

      </SheetContent>
    </Sheet>
  )
}

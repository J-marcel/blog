import { Button } from '@/components/ui/button'
import { Categoty } from '@/types/types'
import { CATEGORIES } from '@/utils/categories'
import Link from 'next/link'
import React from 'react'

export default function CategoriesPage() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      {CATEGORIES.length > 0 ? CATEGORIES.map((category: Categoty) => (
        <Link key={category.id} href={`/categories/${category.slug}`}><Button variant="ghost">{category.name}</Button></Link>
      )) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

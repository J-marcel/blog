import { Categoty } from '@/types/types'
import { CATEGORIES } from '@/utils/categories'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import PageContainer from './page-container'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='p-4 border-t'>
        <PageContainer>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                    <Link href="/"><Image src="/next.svg" alt="Logo" width={100} height={100} className='dark:invert' /></Link>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    {CATEGORIES.length > 0 ?
                        CATEGORIES.map((category: Categoty) => (
                        <Link key={category.id} href={`/categories/${category.slug}`} className='text-sm font-medium text-muted-foreground hover:text-primary'><Button variant="ghost">{category.name}</Button></Link>
                        )) : (
                        <p>Loading...</p>
                        )}

                </div>
                {/* <Link href="/"><Button variant="ghost">Accueil</Button></Link>
                <Link href="/"><Button variant="ghost">Accueil</Button></Link>
                <Link href="/"><Button variant="ghost">Accueil</Button></Link>
                <Link href="/"><Button variant="ghost">Accueil</Button></Link> */}
            </div>
           
        </PageContainer>
    </footer>
  )
}

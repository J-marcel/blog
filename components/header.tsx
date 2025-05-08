import React from 'react'
import PageContainer from './page-container'
import Image from 'next/image'
import Link from 'next/link'
import { HeaderNavigation } from './header-navigation'
import { ResponsiveMenu } from './reponsive-menu'
import { ModeToggle } from './mode-toggle'


export default function Header() {
  return (
    <div className="p-4 shadow-md border-b">
      <PageContainer>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-2">
            {/* responsive menu mobile */}
            <ResponsiveMenu/>
            {/* logo */}
          <Link href="/"><Image src="/next.svg" alt="Logo" width={200} height={200}   className='dark:invert' /></Link>
          </div>
          <div className="flex gap-4"> <HeaderNavigation /></div>
          <div className="flex items-center justify-center gap-4">
            {/* <ThemeToggle /> */}
            <ModeToggle />
            <Link href="/login">Login/Register</Link>
            {/* <Menu humburger menu */}
  
          </div>
        </div>
      </PageContainer>
    </div>
  )
}

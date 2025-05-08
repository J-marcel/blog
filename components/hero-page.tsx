import React from 'react'
import PageContainer from './page-container'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function HeroPage() {
  return (
      <PageContainer>
        <div className='py-10 px-4'>
            <div className=" bg-cover bg-center rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
                <div className="h-full w-full flex flex-col justify-center items-center">
                  <div className="sm:max-w-xl max-w-xl bg-secondary/80 p-4 rounded-lg">
                    <h1 className="text-3xl sm:text-5xl font-bold dark:text-white text-center">Devenir un meilleur développeur React et Next</h1>
                    <Input type="email" name='email' placeholder="Email"  className='dark:bg-white'/>
                    <Button size="lg" className="w-full p-6 mt-4">S&apos;'inscrire</Button>
                    
                  </div>
                </div>
            </div>
        </div>
      </PageContainer>
  )
}

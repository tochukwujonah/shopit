import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/molecules/NavBar/navBar'
import { HeroSection } from '@/components/templates'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      
      <div className='max-w-[1440px] mx-auto w-[90%]'>
        <HeroSection />
      </div>
    </main>
  )
}

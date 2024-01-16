import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainLayout from '@/components/layouts/MainLayout'
import FeaturedMedia from '@/components/UI/FeaturedMedia/FeaturedMedia'
import ForYouList from '@/components/UI/ForYouList/ForYouList'
import JustAdded from '@/components/UI/JustAdded/JustAdded'
import PosterView from '@/components/UI/PosterView/PosterView'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <MainLayout>
        <FeaturedMedia />
        <ForYouList/>
        <JustAdded />
        <PosterView />
    </MainLayout>
    </>
  )
}
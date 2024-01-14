import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainLayout from '@/components/layouts/MainLayout'
import FeaturedMedia from '@/components/UI/FeaturedMedia/FeaturedMedia'
import PosterView from '@/components/UI/PosterView/PosterView'
import CastInfo from '@/components/UI/CastInfo/CastInfo'



const inter = Inter({ subsets: ['latin'] })

export default function CreateUser() {
  return (
    <MainLayout>
        <FeaturedMedia />
        <PosterView />
        <CastInfo />
    </MainLayout>
  )
}
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainLayout from '@/components/layouts/MainLayout'
import FeaturedMedia from '@/components/UI/FeaturedMedia/FeaturedMedia'
import MediaRow from '@/components/UI/MediaRow/MediaRow'
import CastInfo from '@/components/UI/CastInfo/CastInfo'



const inter = Inter({ subsets: ['latin'] })

export default function CreateUser() {
  return (
    <>
    <MainLayout>
        <FeaturedMedia />
        <MediaRow title="More like this" type="small-v" />
        <CastInfo />
    </MainLayout>
    </>
  )
}
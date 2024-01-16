import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { Inter } from 'next/font/google'
import { useStateContext } from '@/components/HBOprovider'
import Login from '@/components/UI/Login/Login'
import { useRouter } from 'next/router'
import MainLayout from '@/components/layouts/MainLayout'
import FeaturedMedia from '@/components/UI/FeaturedMedia/FeaturedMedia'
import ForYouList from '@/components/UI/ForYouList/ForYouList'
import JustAdded from '@/components/UI/JustAdded/JustAdded'
import PosterView from '@/components/UI/PosterView/PosterView'
import AuthCheck from '@/components/AuthCheck'



const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect (() => {

  }, [])

  return AuthCheck(
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

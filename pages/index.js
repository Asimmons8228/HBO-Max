import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { Inter } from 'next/font/google'
import { useStateContext } from '@/components/HBOprovider'
import Login from '@/components/UI/Login/Login'
import { useRouter } from 'next/router'
import MainLayout from '@/components/layouts/MainLayout'
import FeaturedMedia from '@/components/UI/FeaturedMedia/FeaturedMedia'
import AuthCheck from '@/components/AuthCheck'
import MediaRow from '@/components/UI/MediaRow/MediaRow'



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
        <MediaRow title="Movies" type="large-v"/>
        <MediaRow title="Series" type="small-h" />
        <MediaRow title="Action" type="small-v" />
        <MediaRow title="Horror" type="large-h" />
        <MediaRow title="SciFi" type="small-v" />
    </MainLayout>
    </>
  )
}

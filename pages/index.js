import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { Inter } from 'next/font/google'
import { useStateContext } from '@/components/HBOprovider'
import Login from '@/components/UI/Login/Login'
import { useRouter } from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect (() => {
    const loggedIn = false;
    if(loggedIn === false){
     router.push('/create')
    }
  }, [])

  return (
    <div>
      <Login />
    </div>
  )
}

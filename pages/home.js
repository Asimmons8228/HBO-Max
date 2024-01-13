import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainLayout from '@/components/layouts/MainLayout'


const inter = Inter({ subsets: ['latin'] })

export default function CreateUser() {
  return (
    <MainLayout>
        <div>
            Home
        </div>
    </MainLayout>
  )
}
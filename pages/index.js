import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className='login-user'>
        <div className='login-user__top'>
          <div className='login-user__logo' />
          <span className='login-user__title'>
            Who is Watching
          </span>
        </div>
        <div className='login-user__form'>
          <div className='login-user__box'>
            <img className='login-user__user-img' src='https://mighty.tools/mockmind-api/content/human/46.jpg' width={200} />
            <div className='login-user__user-name'>Rajiv</div>
          </div>
          <div className='login-user__box'>
            <img className='login-user__user-img' src='https://mighty.tools/mockmind-api/content/human/46.jpg' width={200} />
            <div className='login-user__user-name'>Rajiv</div>
          </div>
        </div>
        <div className='login-user__buttons'>
          <button className='login-user__adult'>Add Adult</button>
          <button className='login-user__kid'>Add Kid</button>
        </div>
      </div>
    </div>
  )
}

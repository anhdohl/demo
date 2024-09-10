import BannerLogin from '@/assets/Login/banner-login.png'
import React from 'react'

interface LayoutSignInIf {
  children: React.ReactNode
}

export default function LayoutSignIn({
  children
}: LayoutSignInIf) {
  return (
    <>
      <div className='container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <div className='lg:p-8 h-full flex items-center bg-[#F9F9FA]'>
          <div className='mx-auto flex w-full flex-col justify-center sm:w-[480px] sm:h-[438px] bg-[#ffffff] rounded-2xl'>
            <div className='mx-auto flex w-full flex-col justify-center sm:w-[232px]'>
              {children}
            </div>
          </div>
        </div>
        <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
          <div className='absolute inset-0 bg-[#0E0A29]' />
          <img
            src={BannerLogin}
            className='relative m-auto'
            width={'90%'}
            alt='Vite'
          />
        </div>
      </div>
    </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import HeroImg from './img/assets-1.png'

export default function customising() {
   return (
      <div className='w-full relative'>
         <div className='w-full h-full bg-black absolute opacity-70'></div>
         <div className="w-full h-full uppercase text-gray-400 flex flex-col justify-center items-center gap-4 text-center font-dancingScript absolute top-0 left-0 px-2 break-words">
            <h1 className='text-3xl md:text-5xl shadow-2xl'>this page is under customising</h1>
            <h2 className='text-xl md:text-3xl'>I am sorry to you to waiting for this page.</h2>
            <h3 className='text-lg md:text-2xl'>I will launch it as soon as possible.</h3>
            <Link to="/" className='text-2xl w-36 py-1 capitalize mb-5 rounded hover:bg-indigo-400 hover:text-gray-900 ring-2 ring-indigo-500 focus:ring-indigo-500 hover:ring-indigo-400 transition-all'>Back to home</Link>
         </div>
         <img className='w-screen h-screen object-cover' src={HeroImg} alt='Hero' />
      </div>
   )
}

// https://w3layouts.b-cdn.net/wp-content/uploads/2020/04/fog-error-page-990x619.jpg
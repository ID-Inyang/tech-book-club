import React from 'react'
import assets from '../assets/assets'

const TechBook = () => {
  return (
    <>
      <div className='my-10 mx-20 p-15 border-2 border-gray-300 hero-container rounded-lg'>
        <nav className='flex items-center justify-between py-4'>
          <img src={assets.logo}/>
        </nav>
        <div className='flex space-x-4 mt-4 bg-pattern bg-cover rounded-lg'>
          <div className='hero-left flex flex-col md:w-1/2'>
            <h1 className='w-1xl text-gradient text-5xl md:text-5xl font-bold martian leading-[120%]'>
              Join the ultimate tech book club.
            </h1>
            <p className='text-[#062630] mt-8'>
              Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.
            </p>
            <button class="flex align-middle justify-center mt-1.5 items-center px-6 py-3 border-2 border-slate-900 rounded-lg font-bold tracking-wide uppercase text-slate-900 hover:bg-slate-50 transition-colors">
            Review Membership Options
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="w-5 h-5 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              stroke-width="2.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
        <div className='w-1/2 flex items-center justify-center'>
          <img src={assets.hero} alt="Hero Image" className='size-95 h-auto rounded-lg shadow-lg'/>
        </div>
      </div>
    </div>
  </>
  )
}

export default TechBook;
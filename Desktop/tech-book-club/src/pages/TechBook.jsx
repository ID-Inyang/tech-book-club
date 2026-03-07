import React from 'react'
import assets from '../assets/assets'

const TechBook = () => {
  return (
    <>
      <div className='my-10 mx-20 p-5 border-2 border-gray-300 hero-container rounded-lg'>
        <nav>
          <img src={assets.logo}/>
        </nav>
        <div className=' flex space-x-4 mt-4 bg-pattern bg-cover p-6 rounded-lg'>
          <div className='hero-left flex w-1/2'>
            <h1 className='text-gradient text-5xl md:text-4xl font-bold martian leading-[120%]'>
              Join the ultimate tech book club.
            </h1>
            <p className='text-red-500 mt-8'>
              Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.
            </p>
        </div>
        <div className='w-1/2 flex items-center justify-center'>
          <img src={assets.hero} alt="Hero Image" className='w-full h-auto rounded-lg shadow-lg'/>
        </div>
      </div>
    </div>
  </>
  )
}

export default TechBook;
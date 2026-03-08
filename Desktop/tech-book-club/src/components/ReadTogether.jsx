import React from 'react'
import assets from '../assets/assets'

const ReadTogether = () => {
    return (
        <>
            <div className='flex'>
                <div className='w-1/2 flex items-center justify-center'>
                    <img src={assets.friends} alt="Read Together Image" className='size-95 h-auto rounded-lg shadow-lg'/>
                </div>
                <div className='w-1/2 flex flex-col justify-center p-10'>
                    <h2 className='text-3xl font-bold mb-4'>Read Together, Grow Together</h2>
                    <ul className='list-disc list-inside text-lg text-gray-700 mb-6'>
                        <li>Monthly curated tech reads selected by industry experts</li>
                        <li>Virtual and in-person meetups for deep-dive discussions</li>
                        <li> access to new tech book releases</li>
                        <li>Author Q&A sessions with tech thought leaders</li>
                    </ul>
                </div>
            </div>
        </>
    )

}

export default ReadTogether;
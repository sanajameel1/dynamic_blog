import React from 'react'

export default function AuthoreCard() {
    return (
        <div id='about' className='bg-white shadow-lg rounded-lg p-6 mt-12'>
            <div className='flex items-center animation-fadeIn'>


                <img className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500'
                    src='/images/imagedpp.jpg'
                    alt='Authorimage' />

                <div>
                    <h3 className='text-xl font-bold'>Sana Jameel</h3>
                    <p className='text-slate-500'> Web developer | Social Media Marketer | Lead Genration Expert{""}
                    </p>
                </div>
            </div>



            <p className='mt-4 text-black leading-relaxed'>
            Sana Jameel is a talented developer with expertise in Web Development, SEO, and Electronic Engineering. She combines creativity and technical skills to build innovative and user-friendly solutions. Passionate about learning, she continuously adapts to emerging technologies to deliver exceptional results.
            </p>
            <div className='mt-4 flex space-x-3'>
                <a href="#" className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
                    Twitter
                </a>
                <a href="#" className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
                    Linkden
                </a>
                <a href="#" className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
                    GitHub
                </a>

            </div>
        </div>
    )
}

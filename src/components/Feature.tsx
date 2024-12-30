import React from 'react'

export default function Feature() {
    return (
        <div>
            <section className='py-8 bg-neutral-100 mb-40'>
            <h2 className='text-center text-2xl font-bold md:text-5xl animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-10px] hover:to-black text-blue-600'>
    Exploring the Key Features of Our Blog Website
</h2>
<p className='text-center mb-6 mt-4 text-sm text-black sm:text-base md:mb-10 lg:mb-12 animate-fade-in-up delay-100'>
Sana Jameel Dynamic Blog is a vibrant platform where readers can explore informative, creative, and inspiring content. Covering topics like technology, education, business, and everyday life, it offers deep insights that not only inform but also spark new ideas. If your looking to stay updated with the evolving trends of the modern world, this blog is the perfect choice for you!.
</p>

                <div className='mx-auto max-w-7xl px-5'>
                    <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>
                        Exploring Our Categories
                    </h1>
                </div>
                <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>
                    {[
                        "HTML Block of Webdevelopment",
                        "Machine Learning Basics",
                        "Deep Learning Explained",
                        "Natural Language Processing",
                        "AI in Healthcare",
                        "Data Preprocessing Teachniques",
                    ].map((category, index) => (
                        <div key={index} className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-gray-500 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600'>
                            <p className='text-center text-lg font-semibold'>{category}</p>
                            <div className='absolute indent-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 animate-ease-in-out'></div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div id='about' className='w-full md:h-screen flex items-center py-15'>
        <div className='max-w-[1240px] m-auto md-grid grid-cols-3 gap-6 '>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <p className='py-2 text-gray-600'>Front-End web-developer</p>
                <p className='py-2 text-gray-600'>Front-end web development, 
                    also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to
                     constantly be aware of how the field is developing.</p>

                <p className='py-2 text-gray-600'>
                The objective of designing a site is to ensure that when the users open up the site they see the information
                 in a format that is easy to read and relevant
                </p>
                <p className='py-2 text-gray-600 uppercase cursor-pointer'>Check my site fro the latest project</p>
               

            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
              <Image src="/../public/assets/unsplash.jpg" alt="/" width={500} height={250}/>
            </div>
        </div>
    </div>
  )
}

export default About
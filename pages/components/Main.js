import React from 'react'
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center'>
            <div> 
                <p className='uppercase text-sm tracking-widest text-gray-600'>THIS MY PROFOLIO YOU CAN CHECK IT OUT</p>
                <h1 className='py-4 text-gray-600'>Hi I'm <span className='text-[#5651e5]' > Ekene Onwodi </span></h1>
                <h1 className='py-2 text-gray-700'>
                  A Front-End Web Developer 
                </h1>
                <p className='py-4 text-gray-400 max-w-[70%] m-auto'>I'm a Front-end web developer  who constantly seeks out innovative solutions to everyday problems currently i'm focused on building responsive front-end web application while learning back-end technologies</p>

                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150'>
                            <FaLinkedinIn/>

                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150'>
                            <AiOutlineMail/>

                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150'>
                            <FaGithub/>

                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150'>
                            <FaLinkedinIn/>

                            </div>
                </div>
            </div>
            
           
        </div>
   </div>
  )
}

export default Main
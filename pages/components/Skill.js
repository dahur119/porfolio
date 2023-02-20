import Image from 'next/image'
import React from 'react'
import html from '../../public/assets/html.png'
import javascript from '../../public/assets/javascript.png'
import github from '../../public/assets/github1.png'
import node from '../../public/assets/node.png'
import react from '../../public/assets/react.png'
import firebase from '../../public/assets/firebase.png'
import tailwind from '../../public/assets/tailwind.png'


function Skill() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skill</p>
        <h1 className='py-4 '>What i can do</h1>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-3 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={html} width='64px' height='64px' alt='/' />

                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                </div>
            </div>

        </div>


        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-3 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={ javascript} width='64px' height='64px' alt='/' />

                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                </div>
            </div>

        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-3 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={github } width='64px' height='64px' alt='/' />

                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                </div>
            </div>

        </div>


        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-3 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={react} width='64px' height='64px' alt='/' />

                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                </div>
            </div>

        </div>


        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-3 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={node} width='64px' height='64px' alt='/' />

                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Node</h3>
                </div>
            </div>

        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-3 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={react} width='64px' height='64px' alt='/' />

                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>React</h3>
                </div>
            </div>

        </div>

        
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-3 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={firebase} width='64px' height='64px' alt='/' />

                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Firebase</h3>
                </div>
            </div>

        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-3 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={tailwind} width='64px' height='64px' alt='/' />

                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Tailwind</h3>
                </div>
            </div>

        </div>
        </div>

       

       

        


        </div>
        
</div>
  )
}

export default Skill
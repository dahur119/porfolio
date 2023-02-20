import React from 'react'
import firebase from '../../public/assets/firebase.png'
import cryptoMarket from '../../public/project/cryptoMarket.png'
import nextEcommerce from '../../public/project/nextEcommerce.png'
import Ecommerce from '../../public/project/Ecommerce.png'

import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='CryptoCurrency'
            backgroundImg={ cryptoMarket}
            projectUrl='/property'
            tech='React JS'
          />

            <ProjectItem
            title='Nextjs Ecommerce '
            backgroundImg={ nextEcommerce}
            projectUrl='/Ecommerce'
            tech='Next JS'
          />

      <ProjectItem
            title='Firebase Ecommerce '
            backgroundImg={Ecommerce}
            projectUrl='/Firebase'
            tech='React JS'
          />
        
        
        </div>
      </div>
    </div>
  )
}

export default Projects

import React from 'react'
import image from '../assets/img/projects/promo-hero.webp'

const ProjectCard = () => {
  return (
    <div className='flex flex-col md:flex-row gap-5'>
      <div className='md:w-1/2 shadow-box  rounded-lg overflow-hidden shadow-md shadow-md-right'>
        <div className='h-[100px]'>
          <img src={image} alt="" className='object-cover w-full h-full mb-2 rounded-lg' style={{marginBottom: '-10px'}} />
        </div>
    <div className='p-2'>
    <h4>Elvis Landing</h4>
        <p>A project about a website dedicated to Elvis.</p>
        <a href="https://example.com" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 inline-block">Visit Website</a>
    </div>
      </div>
      <div className='md:w-1/2   shadow-box rounded-lg overflow-hidden shadow-md shadow-md-right'>
        <div className='h-[100px]'>
          <img src={image} alt="" className='object-cover w-full h-full mb-2 rounded-lg' style={{marginBottom: '-10px'}} />
        </div>
        <div className='p-2'>
    <h4>Elvis Landing</h4>
        <p>A project about a website dedicated to Elvis.</p>
        <a href="https://example.com" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 inline-block">Visit Website</a>
    </div>
      </div>
    </div>
  )
}

export default ProjectCard

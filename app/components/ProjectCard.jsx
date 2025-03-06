import React from 'react'
import { CodeBracketIcon,EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export const ProjectCard = ({ imgURL, title, description, gitURL ,previewURL}) => {
  return (
    <div>
        <div 
          className="h-52 md:h-72 rounded-t-xl relative group"
          style={{ background: `url(${imgURL})`, backgroundSize: "cover" }}>
          <div className="overlay items-center justify-center absolute hidden top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:flex group-hover:bg-opacity-[0.90] transition-all duration-500">
            <Link 
              href={gitURL} 
              className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group-hover:flex group/link'>
              <CodeBracketIcon 
                className='h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' 
              />
            </Link>

            <Link 
              href={previewURL} 
              className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group-hover:flex group/link'>
              <EyeIcon  
                className='h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' 
              />
            </Link>
          </div>
        </div>
        <div className="text-white rounded-b-xl bg-[#151515] py-6 px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
    </div>
  )
}
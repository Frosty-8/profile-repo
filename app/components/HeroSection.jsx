"use client"

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

export function HeroSection() { 
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left"  >
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl px-4 font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500'>Hello, I'm{" "} </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            
                            'Sarthak Dongare',
                            1000, 
                            'Web Developer',
                            1000,
                            'Data Scientist',
                            1000,
                            'MlOps Engineer',
                            1000,
                            'FreeLancer',
                            1000
                        ]}
                        wrapper="span"
                        speed={30}
                        style={{ fontSize: '1em', display: 'inline-block' }}
                        repeat={Infinity}
                        />
                </h1>
                <p className="text-white text-base sm:text-lg lg:text-xl px-4 py-2">
                    I'm a Data Science engineer with a passion for building data-driven solutions.
                </p>
                <div className="">
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-white hover:bg-slate-300 text-white'>
                        Hire Me
                    </button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-purple-500 to-blue-500  hover:bg-slate-800 text-white  mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 '>
                            Download CV
                        </span>
                    </button>
                </div>
            </div>    
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className=" rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]">
                    <Image 
                        src="/assets/herodesign.jpeg"
                        alt="hero-image"
                        height={300} 
                        width={300} 
                        className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

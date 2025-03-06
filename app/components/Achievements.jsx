"use client";
import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumbers= dynamic(()=>{
    return import('react-animated-numbers')
},
{
    ssr:false,
})

const achievements = [
    {
        metric:"Projects",
        value:"10",
        postfix:"+",
    },
    {
        prefix:"~",
        metric:"Users",
        value:"10",
    },
    {
        metric:"Years of Experience",
        value:"2",
        postfix:"+",
    },
    {
        metric:"Total Commits",
        value:"100",
        postfix:"+",
    },
]

export const Achievements = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
            {
                achievements.map((achievements,index)=>{
                    return(
                        <div key={index} className="flex flex-col items-center justify-center mx-4">
                            <h2 className="text-white text-4xl font-bold flex flex-row">
                                {achievements.prefix}
                                <AnimatedNumbers
                                    includeComma
                                    animateToNumber={Number(achievements.value)}
                                    locale="en"
                                    className='text-white text-4xl font-bold'
                                    configs={(_,index)=>{
                                        return {
                                            mass:1,
                                            friction: 100,
                                            tensions: 140 *(index+1),
                                        }
                                    }}
                                />
                                {achievements.postfix}
                            </h2>
                            <p className="text-[#ADB7BE] text-base">
                                {achievements.metric}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

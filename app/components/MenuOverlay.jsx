import React from 'react'
import Navlink from './Navlink'

export const MenuOverlay = ({links }) =>{
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link,index) => (
            <li key={index}>    
                <Navlink href={link.path} title={link.title} key={index}/>
            </li>
        ))}
    </ul>
  )
}

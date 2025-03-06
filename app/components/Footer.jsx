import React from 'react'

export const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353F]
                        border-l-transparent border-r-transparent
                        text-white'>
        <div className="container p-12 flex justify-between">
            <span>LOGO</span>
            <p className='text-slate-700'>All rights reserved &copy; {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

import React from 'react'

export const TabButton= ({children,selectTab,active})=> {
  const buttonclass = active ? "text-white border-b border-purple-500 " : "text-[#ADB7BE] border-b "
  
    return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonclass}`}>
            {children}
        </p>
        
    </button>
  )
}

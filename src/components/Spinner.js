import React from 'react'
import './Spinner.css'

function Spinner() {
  return (
    <div className='flex flex-col justify-center items-center space-y-2'>
        <div className="custom-loader"></div>
        <p className='text-xl font-semibold text-white'>Loading...</p>
    </div>
  )
}

export default Spinner
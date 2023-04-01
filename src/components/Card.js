import React from 'react'
import {FcLike} from 'react-icons/fc'

function Card(props) {
    let course = props.course;
    function handleLike(){
        
    }
    
  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80'>
        <div className="relative">
            <img src={course.image.url} 
            alt="" className="object-contain" />
            <div className="absolute rounded-full w-[30px] h-[30px] grid place-items-center bg-white right-1 -bottom-4">
                <button onClick={handleLike}>
                    <FcLike fontSize="1.75rem" />
                </button>
            </div>
        </div>
        <div className="p-4 text-white">
            <p className="font-semibold text-lg leading-6">{course.title}</p>
            <p className="mt-2">{course.description}</p>
        </div>
    </div>
  )
}

export default Card
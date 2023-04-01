import React from 'react'
import { useState } from 'react';
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';

function Card(props) {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function handleLike(title){
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev)=> prev.filter((cid)=>(cid !== course.id)));
            toast.error(`You Unliked the course ${course.title}`)
        }else{
            if(likedCourses.lenght === 0){
                setLikedCourses([course.id]);
            }else{
                setLikedCourses((prev)=> [...prev, course.id]);
            }
            toast.success(`You Liked the course ${course.title}`)
        }
    }
    
  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80'>
        <div className="relative">
            <img src={course.image.url} 
            alt="" className="object-contain" />
            <div className="absolute rounded-full w-[30px] h-[30px] grid place-items-center bg-white right-1 -bottom-4">
                <button onClick={()=>handleLike(course.title)}>
                    {
                        !likedCourses.includes(course.id) ? (
                            <FcLikePlaceholder fontSize="1.75rem" />
                        ) : (
                            <FcLike fontSize="1.75rem" />
                        )
                    }
                </button>
            </div>
        </div>
        <div className="p-4 text-white">
            <p className="font-semibold text-lg leading-6">{course.title}</p>
            <p className="mt-2">
                {
                    course.description.length >100 ? (
                        course.description.substr(0,100) + "..."
                    ) : (
                        course.description
                    )
                }
            </p>
        </div>
    </div>
  )
}

export default Card
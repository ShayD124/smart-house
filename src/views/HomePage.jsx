import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { RoomContext } from '../contexts/RoomContext'

export default function HomePage() {

  const { rooms } = useContext(RoomContext)
  

  return (
    <div className='text-center p-6 bg-gray-100'>
        <h1 className='text-4xl font-bold mb-6 text-gray-800'>Smart House</h1>
        <Link to={'/add-room'} className='no-underline'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300'>
            +
          </button>
        </Link>
        <div className='flex flex-wrap justify-center mt-6 '>
          {rooms.map((room, index)=>(
            <div 
            key={index} 
            className='w-24 h-24 m-2 flex items-center justify-center text-balance font-bold rounded shadow-lg relative' 
            style={{ backgroundColor: room.color }}
            >
              <Link 
                to={`/room/${room.name}`} 
                className='no-underline w-full h-full flex items-center justify-center'
              >
                <button className='w-full h-full flex items-center justify-center g-black bg-opacity-50 rounded'>
                  <span className='text-white text-shadow'>{room.name}</span>
                </button>
              </Link>
            </div>
          ))}
        </div>
    </div>
  )
}

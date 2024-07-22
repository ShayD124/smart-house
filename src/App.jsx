import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { RoomContext } from './contexts/RoomContext'
import HomePage from './views/HomePage'
import AddRoomPage from './views/AddRoomPage'
import RoomPage from './views/RoomPage'

function App() {
  
  const [rooms,setRooms] = useState([])

  const addRoom = (room)=>{
    setRooms([...rooms,room])
  }

  const addDevice = (roomName,deviceName) =>{
      setRooms(
        rooms.map((room) => 
            room.name === roomName ? {...room, devices: [...room.devices, {name: deviceName, on:false}]} : room
        )   
      )
  }

  const toggleDeviceState = (roomName, deviceIndex) => {
    setRooms(
        rooms.map((room) => 
            room.name === roomName 
                ? {
                ...room, 
                devices: room.devices.map((device,index)=>
                    index === deviceIndex ? {...device, on: !device.on} : device
                ),
            } : room
          )
      )
  }

  return (
    <div className='bg-gray-100'>
    <RoomContext.Provider value={{ rooms , setRooms, addRoom, addDevice, toggleDeviceState }}>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/add-room' element={<AddRoomPage/>}/>
        <Route path='/room/:roomName' element={<RoomPage/>}/>
      </Routes>
    </RoomContext.Provider>
    </div>
  )
}

export default App
import React from 'react'

const Home = ({isLoggedIn}) => {
  return (
    <div className='mt-[20%] justify-center items-center'>
      <div className="flex flex-1 justify-center items-center text-white text-3xl">
        This is my Assignment for Better Software
      </div>
      <br></br>
      <div className="text-center items-center text-white text-3xl">
        Personal Details -
        <div className="flex justify-center items-center text-white text-3xl">
          Om Raj
        </div>
        <div className="flex justify-center items-center text-white text-3xl">
          8789195638
        </div>
        <div className="flex justify-center items-center text-white text-3xl">
          omraj010@gmail.com
        </div>
      </div>
    </div>
  )
}

export default Home
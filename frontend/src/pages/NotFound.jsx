import React from 'react'

const NotFound = () => {
  return (
    <div className='w-full h-[calc(100vh-100px)] flex flex-col gap-3  justify-center items-center'>
      <h1 className='text-6xl font-black'>404</h1>
      <h1 className='text-5xl'>Page Not Found</h1>
      <a href="/">Back to Home</a>
    </div>
  )
}

export default NotFound

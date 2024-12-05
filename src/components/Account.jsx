import React from 'react'

export default function Account() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  return (
    <div className='flex flex-col p-4 w-[50%] mx-auto'>
      <h1 className='text-2xl font-bold text-center'>Edit Account</h1>
      <div className='flex flex-col items-center w-24 h-24 justify-center mx-auto my-4'>
        <img src='https://via.placeholder.com/150' alt="User" className='w-24 h-24 rounded-full' />
      </div>
      <form className='flex flex-col gap-4 w-[50%] mx-auto' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
            <input type="text" placeholder='Username' className='bg-[#1b1b1b] border-b focus:outline-none border-gray-600  shadow-md p-2' />
        </div>
        <div className='flex flex-col'>
            <input type="email" placeholder='Email' className='bg-[#1b1b1b] border-b focus:outline-none border-gray-600  shadow-md p-2' />
        </div>
      </form>
      <button className='bg-[#1b1b1b] focus:outline-none mt-4 p-2 rounded-md' type='submit'>Save</button>
    </div>
  )
}

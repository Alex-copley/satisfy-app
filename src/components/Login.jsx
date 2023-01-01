import React from 'react'
import login_img from "../assets/satisfying_hero.jpg"

export default function login() {
  return (
    <div className='w-full h-screen bg-[#121116]'>
        <img className='absolute w-full h-full object-cover opacity-30 lg:opacity-100' src={login_img} alt="/" />

        <div className='relative flex items-center h-full lg:mr-[45%]'>
            <form className='max-w-[400px] w-full mx-auto bg-gradient-to-bl from-white/90 to-gray-300/90 shadow-sm rounded-md p-8'>
                <h2 className='text-4xl font-bold text-center py-8'>Login</h2>
                <div className='flex flex-col mb-4 '>
                    <label>Username</label>
                    <input className='border relative bg-gray-100 p-2' type="text" />
                </div>
                <div className='flex flex-col'>
                    <label>Password</label>
                    <input className='border relative bg-gray-100 p-2' type="password" />
                </div>
                <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign In</button>
                <p className='flex items-center mt-2'><input className='mr-2 hover:cursor-pointer' type="checkbox" />Remember Me</p>
                <p className='text-center mt-6 hover:text-blue-400 hover:cursor-pointer'>Not a member? Sign up now</p>
            </form>
        </div>
    </div>
  )
}

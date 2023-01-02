import React from 'react';
import { useState } from 'react';
import login_img from "../assets/satisfyme_hero.png";
import logo_img from "../assets/satisfy_logo-removebg.png";

export default function Login() {
    const [isHidden, setIsHidden] = useState(false)
    return (
        <div className='w-full h-screen bg-[#121116]'>
            <img className='absolute w-full h-full object-cover opacity-80 lg:opacity-100' src={login_img} alt="/" />

            {/* Sign In Form */}
            {!isHidden && (
                <div className='relative flex items-center h-full lg:ml-[55%]'>
                    <form className='max-w-[400px] w-full mx-auto bg-white p-8 rounded-md'>

                        <div className='flex items-center w-full justify-center'>
                            <img className='h-20' src={logo_img} alt="" />
                            <h1 className='text-5xl font-bold azonix-font drop-shadow-lg gradient-underline'>atisfyMe</h1>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-2xl py-4'>Sign In</h2>
                            <p>or <button className='text-1xl text-[#10afe9] hover:cursor-pointer hover:text-[#0b4cb2]' onClick={() => setIsHidden(!isHidden)}>create an account</button></p>
                        </div>
                        <div className='flex flex-col mb-4 '>
                            <input className='border border-gray-400 relative bg-white p-2 rounded-md' placeholder="Username" type="text" />
                        </div>
                        <div className='flex flex-col'>
                            <input className='border border-gray-400 relative bg-white lg:bg-transparent p-2 rounded-md' placeholder="Password" type="password" />
                        </div>
                        <p className='flex items-center mt-2'><input className='mr-2 hover:cursor-pointer' type="checkbox" />Remember Me</p>
                        <button className='w-full py-3 mt-8 bg-[#0b4cb2] hover:bg-[#10afe9] rounded-md relative text-white'>Sign In</button>
                    </form>
                </div>
            )}

            {/* Sign Up Form */}
            {isHidden && (
                <div className='relative flex items-center h-full lg:ml-[55%]'>
                    <form className='max-w-[400px] w-full mx-auto bg-white p-8 rounded-md'>
                        <div className='flex items-center w-full justify-center'>
                            <img className='h-20' src={logo_img} alt="" />
                            <h1 className='text-5xl font-bold azonix-font'>atisfyMe</h1>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-2xl py-4'>Create an account</h2>
                            <p>or <button className='text-1xl text-[#10afe9] hover:cursor-pointer hover:text-[#0b4cb2]' onClick={() => setIsHidden(!isHidden)}>log in</button></p>
                        </div>

                        <div className='flex flex-col mb-4 '>
                            <input className='border border-gray-400 relative bg-white p-2 rounded-md' placeholder="First Name" type="text" />
                        </div>
                        <div className='flex flex-col mb-4 '>
                            <input className='border border-gray-400 relative bg-white p-2 rounded-md' placeholder="Last Name" type="text" />
                        </div>
                        <div className='flex flex-col mb-4 '>
                            <input className='border border-gray-400 relative bg-white p-2 rounded-md' placeholder="Email" type="email" />
                        </div>
                        <div className='flex flex-col'>
                            <input className='border border-gray-400 relative bg-white lg:bg-transparent p-2 rounded-md' placeholder="Password" type="password" />
                        </div>
                        <div className='mt-2 text-sm'><input className='mr-2 hover:cursor-pointer' type="checkbox" />I agree to the <button className='text-[#10afe9] hover:cursor-pointer hover:text-[#0b4cb2]'>SatisfyMe Terms</button>. Learn aobut how we use and protect your data in our <button className='text-[#10afe9] hover:cursor-pointer hover:text-[#0b4cb2]'>Privacy Policy</button></div>
                        <button className='w-full py-3 mt-6 bg-[#0b4cb2] hover:bg-[#10afe9] rounded-md relative text-white'>Create an account</button>
                    </form>
                </div>
            )}
        </div>
    )
}

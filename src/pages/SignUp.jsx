import React, { useState } from 'react';
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from 'react-router';
import OAuth from '../components/OAuth';

export default function SignUn() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState ({
        name:"",
        email: "",
        password: "",
    });
    const {name, email, password} = formData;
    function onChange(e) {
        setFormData((prevState)=>({
            ...prevState,
            [e.target.id]: e.target.value,
        }))     
    };
  return (
    <section>
        <h1 className='text-3xl  text-center mt-6 font-bold'>Sign Up</h1>
        <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
            <div className='md:w-[45%] lg:w-[30%] sm:w-[80%] mb-12 md:mb-6'>
                <img src="https://images.pexels.com/photos/8470837/pexels-photo-8470837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
                className='w-full rounded-2xl' />
            </div>
            <div  className='w-full md:w[67%] lg:w-[40%] lg:ml-20 '>
                <form>
                <input 
                     type="text"
                     id='name'
                     value={name}
                     onChange={onChange}
                     placeholder='Full name'
                     className=' w-full  px-4 py-2 text-xl text-gray-700
                     bg-white border-gray-300 rounded-2xl transition ease-in-out
                     mb-6' 
                      />
                    <input 
                     type="email"
                     id='email'
                     value={email}
                     onChange={onChange}
                     placeholder='Email address'
                     className=' w-full  px-4 py-2 text-xl text-gray-700
                     bg-white border-gray-300 rounded-2xl transition ease-in-out
                     mb-6' 
                      />
                      <div className=' relative mb-6'>
                      <input 
                     type={showPassword ? "text" : "password"}
                     id='password'
                     value={password}
                     onChange={onChange}
                     placeholder='Password'
                     className=' w-full  px-4 py-2 text-xl text-gray-700
                     bg-white border-gray-300 rounded-2xl transition ease-in-out' 
                      />
                      {showPassword ? ( 
                        <IoIosEyeOff 
                        className=' absolute right-3 top-3 
                       text-xl cursor-pointer'
                       onClick={()=> setShowPassword ((prevState) => !prevState)}                       
                        /> )
                       : ( <IoMdEye className=' absolute right-3 top-3 
                       text-xl cursor-pointer'
                       onClick={()=> setShowPassword ((prevState) => !prevState)} /> )}
                      </div>
                      <div className='flex justify-between whitespace-nowrap text-sm
                      sm:text-lg'>
                        <p 
                        className='mb-6'>
                            Have a account?
                            <Link to={"/sign-in"}
                            className='text-red-600
                            hover:text-red-900 transition duration-300 ease-in-out
                            ml-1'
                            >Sign in</Link>
                        </p>
                        <p>
                            <Link to={"/forgot-password"}
                            className='text-blue-600
                            hover:text-blue-900 transition duration-300 ease-in-out
                            ml-1'
                            >Forgot Password?</Link>
                        </p>
                      </div>
                      <button
                className='w-full bg-blue-600 text-white px-7 py-3 font-medium uppercase 
                rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out 
                hover:shadow-lg active:bg-blue-800'
                 type="submit">Sign up</button>
                 <div className='flex items-center my-4 before:border-t  before:flex-1 
                  before:border-gray-300 after:border-t  after:flex-1 
                  after:border-gray-300'>
                    <p className='text-center font-semibold mx-4 '>OR</p>
                 </div>

                 <OAuth />
                </form>
            </div>
        </div>
    </section>
  )
}

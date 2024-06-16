"use client";

import Link from 'next/link';
import React from 'react'
import { FcHome } from "react-icons/fc";
import { signOut } from 'next-auth/react';

const Navbar2 = () => {
  return (
      
    <div className='flex flex-row bg-green-500 font-semibold text-4xl p-2 rounded-lg'>
      <div className='mt-2'><FcHome size={50}/></div>
      <div className='mx-80'>
      <h1 className=
        'border-4 border-double p-2 rounded-md bg-grey-200 border-black text-white'>
          Real Estate Management</h1>
          </div>
          </div>
          
  )
}

export default Navbar2
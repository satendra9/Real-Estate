"use client";

import Link from 'next/link';
import React from 'react'
import { FcHome } from "react-icons/fc";
import { signOut } from 'next-auth/react';

const Navbar = () => {
  return (
    
    <div className='flex justify-between bg-green-500 font-semibold text-4xl p-4 rounded-lg'>
      <Link href='/api/detailsForm'> <div className='mt-2'><FcHome size={50}/></div></Link>
      <div>
      <h1 className=
        'border-4 border-double p-2 rounded-md bg-grey-200 border-black text-white'>
          Real Estate Management</h1>
          </div>
          <div className='mt-3'>
          <button onClick={() => signOut()} type="button" className="btn btn-danger">LOG OUT</button>
          </div>
          </div>
          

  )
}


export default Navbar
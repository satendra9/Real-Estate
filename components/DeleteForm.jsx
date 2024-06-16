"use client";

import { useRouter } from 'next/navigation';
import React from 'react'
import { HiOutlineTrash } from "react-icons/hi";

const DeleteForm = ({id}) => {
  const router = useRouter();
  const MdDelete = async ()=> {
    const confirmed = confirm("Are you sure?");
    if(confirmed){
      const res = await fetch(`http://localhost:3000/api/addDetails?id=${id}`, {
        method: "DELETE",
      })
      if(res.ok){
        router.refresh();
      }
    }
  }
  return (
    <button className='text-red-400' onClick={MdDelete}>
      <HiOutlineTrash size={24} />
    </button>
  )
}

export default DeleteForm
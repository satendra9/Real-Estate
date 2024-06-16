"use client";

import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Navbar from './Navbar';

const EditForm = ({id, title, description, image, place, contact}) => {

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newImage, setNewImage] = useState(image);
  const [newPlace, setNewPlace] = useState(place);
  const [newContact, setNewContact] = useState(contact);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await fetch(`http://localhost:3000/api/addDetails/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({newTitle, newDescription, newImage, newPlace, newContact})
      })

      if(res.ok){
        router.push("/api/propertyList")
        router.refresh();
      
      }else{
        throw new Error("Unable to fetch data");
      }
      
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
    <Navbar />
    <form onSubmit={handleSubmit} className='max-w-96'>
    <div className='flex justify-center mt-4 text-2xl font-serif font-semibold text-blue-700'>
        <h1>Add new property</h1>
    </div>
    <div className='flex-col justify-center'>
        <div className='flex justify-between mt-4'>
        <label className='ml-2' htmlFor='Name'>Title</label>
        <input className="border-solid border-2 border-indigo-300" type="text"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle} />
        </div>
        <div className='flex justify-between mt-4'>
        <label className='ml-2' type="text" placeholder="description">Description</label>
        <input className="border-solid border-2 border-indigo-300" type="text" 
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}/>
        </div>
        <div className='flex justify-between mt-4'>
        <label className='ml-2' type="text" placeholder="image">Image</label>
        <input className="border-solid border-2 border-indigo-300" type="text"
        onChange={(e) => setNewImage(e.target.value)} 
        value={newImage}/>
        </div>
        <div className='flex justify-between mt-4'>
        <label className='ml-2' type="text" placeholder="place">Place</label>
        <input className="border-solid border-2 border-indigo-300" type="text"
        onChange={(e) => setNewPlace(e.target.value)}
        value={newPlace} />
        </div>
        <div className='flex justify-between mt-4'>
        <label className='ml-2' type="number" placeholder="contact">Contact</label>
        <input className="border-solid border-2 border-indigo-300" type="number"
        onChange={(e) => setNewContact(e.target.value)}
        value={newContact} />
        </div>
    </div>
    <div className='flex justify-center m-4 text-xl'>
    <button type="submit" className='border-solid border-2 p-2 rounded-md bg-cyan-300 hover:bg-cyan-100 font-serif'>
        Update Property
        </button>
    </div>
   
    </form>
    </>
  )
}

export default EditForm
"use client";

import React from 'react';
import { useState, useNavigate } from 'react';
import { useRouter } from 'next/navigation';
import PropertyList from '../components/PropertyList'
import Link from 'next/link';
import Navbar from './Navbar';

const DetailsForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [place, setPlace] = useState("");
    const [contact, setContact] = useState();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title || !description || !image || !place || !contact){
            alert("Please input all the fields");
            return;
        }

        try{
            const res = await fetch("http://localhost:3000/api/addDetails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({title, description, image, place, contact})
            })

            if(res.ok){
            
                router.refresh();
                router.push("/api/propertyList");
            }else{
                throw new Error("Failed to create property");
            }

        }catch(err){
            console.log(err);
        }
        
    }

  return (
    <>
    <Navbar />
    <div className="bg-green-300 h-screen rounded-lg">
    <div class="bg-[url('/stock1.jpg')] bg-[length:450px_400px] bg-no-repeat bg-right-top">
    <form onSubmit={handleSubmit} className='max-w-96'>
    <div className='flex justify-center mt-4 text-2xl font-serif font-semibold text-blue-700'>
        <h1>Add new property</h1>
    </div>
    <div className='flex-col justify-center'>
        <div className='flex justify-between mt-4'>
        <label className='ml-2 fw-medium' htmlFor='Name '>Title</label>
        <input className="placeholder-gray-500 w-56 rounded-full px-3 pl-8 py-1 outline-none transition-all duration-700 ease-in-out focus:shadow-outline hover:w-64" type="text" 
        onChange={(e) => setTitle(e.target.value)}
        value={title} />
        </div>
        <div className='flex justify-between mt-4'>
        <label className='ml-2 fw-medium' type="text" placeholder="description">Description</label>
        <input className="placeholder-gray-500 w-56 rounded-full px-3 pl-8 py-1 outline-none transition-all duration-700 ease-in-out focus:shadow-outline hover:w-64" type="text" 
        onChange={(e) => setDescription(e.target.value)}
        value={description}/>
        </div>
        <div className='flex justify-between mt-4'>
        <label className='ml-2 fw-medium' type="text" placeholder="image">Image</label>
        <input className="placeholder-gray-500 w-56 rounded-full px-3 pl-8 py-1 outline-none transition-all duration-700 ease-in-out focus:shadow-outline hover:w-64 hover:w-64" type="text"
        onChange={(e) => setImage(e.target.value)} 
        value={image}/>
        </div>
        <div className='flex justify-between mt-4'>
        <label className='ml-2 fw-medium' type="text" placeholder="place">Place</label>
        <input className="placeholder-gray-500 w-56 rounded-full px-3 pl-8 py-1 outline-none transition-all duration-700 ease-in-out focus:shadow-outline hover:w-64 hover:w-64" type="text"
        onChange={(e) => setPlace(e.target.value)}
        value={place} />
        </div>
        <div className='flex justify-between mt-4'>
        <label className='ml-2 fw-medium' type="number" placeholder="contact">Contact</label>
        <input className="placeholder-gray-500 w-56 rounded-full px-3 pl-8 py-1 outline-none transition-all duration-700 ease-in-out focus:shadow-outline hover:w-64 hover:w-64" type="text"
        onChange={(e) => setContact(e.target.value)}
        value={contact} />
        </div>
    </div>
    <div className='flex justify-center m-4 text-xl'>
    <button type="submit" className='btn btn-success'>
        Add Property
        </button>
    </div>
    <Link href='/api/propertyList' className='flex justify-center'>
        <button className='btn btn-primary btn-lg'>
            Property List</button>
    </Link>
    </form>
    </div>
    </div>

    </>
  )
}

export default DetailsForm
import Link from 'next/link';
import React from 'react'
import Navbar from './Navbar';
import { FcViewDetails } from 'react-icons/fc';
import { FaEdit } from 'react-icons/fa';
import DeleteForm from './DeleteForm';

const getProperty = async () => {
    try{
        const res = await fetch("http://localhost:3000/api/addDetails", {
           cache: "no-store",
        })
        if(!res.ok){
            throw new Error("Unable to fetch data");
        }
        
        return res.json();

    }catch(err){
        console.log(err);
    }
}

const PropertyList = async () => {
    const {properties: prop} = await getProperty();
  
  return (
    <>
    <Navbar />
   <table className='shadow-2xl font-[poppins] border-2 border-cyan-200 w-full overflow-hidden text-center'>
   <thead className='text-white'>
     <tr>
       <th className='py-3 bg-cyan-800'>Details</th>
       <th className='py-3 bg-cyan-800'>Owner Name</th>
       <th className='py-3 bg-cyan-800'>Description</th>
       <th className='py-3 bg-cyan-800'>Place</th>
       <th className='py-3 bg-cyan-800'>Contact</th>
       <th className='py-3 bg-cyan-800'>Actions</th>
     </tr>
   </thead>
   <tbody className='text-cyan-900 text-center'>
     {
       prop.map((p) => (
 
     <tr key={p._id} className='bg-slate-100 hover:bg-slate-200 hover:scale-200 cursor-pointer duration-300 text-center'>
       <td className='py-3 px-6 text-center ml-4'><FcViewDetails size={22}/></td>
       <td className='py-3 px-6 text-center'>{p.title}</td>
       <td className='py-3 px-6'>{p.description}</td>
       <td className='py-3 px-6'>{p.place}</td>
       <td className='py-3 px-6' >{p.contact}</td>
       <td className='flex flex-row mt-3 gap-2'>
        
        <div>
        <Link href={`/api/editForm/${p._id}`}><FaEdit size={22}/></Link>
        </div>
        <div>
        <DeleteForm id={p._id}/>
        </div>
        </td>
    
     </tr>
       ))}
   </tbody>
 </table>
    </> 
   
  )
}

export default PropertyList
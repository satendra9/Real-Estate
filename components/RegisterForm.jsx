"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Navbar2 from './Navbar2';

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e)=> {
      e.preventDefault();

      if(!name || !email || !password){
          setError("Please input all the fields");
          return
      }

      try{

          const resUserExists = await fetch("http://localhost:3000/api/userExists", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({email}),
              
          })

          const {user} = await resUserExists.json();

          if(user){
              setError("User already exists");
              return;
          }

          const res = await fetch("http://localhost:3000/api/register", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({name, email, password}),
          });
          if (res.ok) {
              const form = e.target;
              form.reset();
              router.push("/loginPage");
            } else {
              console.log("User registration failed.");
            }
      }catch(err){
          console.log("Error during registration: ", error);
      }
  }
  return (
    <>
    <Navbar2 />
    <div className="grid place-items-center h-screen cursor-auto">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Register
          </button>
          
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link href='/loginPage' className="text-sm mt-3 text-right" >
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
    </>
  )
}

export default RegisterForm
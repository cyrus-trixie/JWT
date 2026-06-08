"use client";
import {useState} from "react";



export default function Home() {

    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=()=>{
        // Handle form submission logic here
       
    };

    return(
        <main>
           <div className="flex justify-center items-center h-screen">
             <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <input type="text" placeholder="Username" className="border border-gray-300 p-2 rounded-lg mb-4 w-full text-black" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded-lg mb-4 w-full text-black" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" className="border border-gray-300 p-2 rounded-lg mb-4 w-full text-black" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="bg-black text-white p-2 rounded-lg w-full cursor-pointer hover:bg-gray-800" onClick={handleSubmit}>Sign Up</button>
             </div>
           </div>
        </main>
    );
}
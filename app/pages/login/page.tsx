export default function LoginPage() {
    return(
        <main>
           <div className="flex justify-center items-center h-screen">
             <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">                <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded-lg mb-4 w-full text-black" />
                <input type="password" placeholder="Password" className="border border-gray-300 p-2 rounded-lg mb-4 w-full text-black" />
                <button className="bg-black text-white p-2 rounded-lg w-full cursor-pointer hover:bg-gray-800">Login</button>
             </div>
           </div>
        </main>
    );
}
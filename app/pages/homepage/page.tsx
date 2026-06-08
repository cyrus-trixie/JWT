import Link from "next/link";
export default function HomePage(){
    return (
        <main>
            <div>
            <nav className="bg-white p-2 w-full fixed top-0 left-0 right-0">
                <ul className="flex items-center justify-end gap-4">
                  
                    <Link className="text-white bg-black p-2 rounded-lg w-24 text-center cursor-pointer" href="/pages/sign">SignUp</Link>
                        <Link className="text-white bg-black p-2 rounded-lg w-24  text-center cursor-pointer" href="/pages/login">Login</Link>
                   
    
                </ul>
            </nav>
  <div className="flex justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
            </div>
            </div>
          
      
        </main>
    );
}
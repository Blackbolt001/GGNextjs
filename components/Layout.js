import { useSession, signIn } from "next-auth/react"
import Nav from '../components/Nav';
import { useState } from "react";




export default function Layout({children}) {
  const [showNav,setShowNav] = useState(false);
  const { data: session } = useSession();
 if (!session) {
  return (
    <div className="bg-black-950 flex items-center">
    <div className="bg-[url('https://img1.wallspic.com/previews/0/3/5/8/3/138530/138530-urbanarea-water-light-city-blue-x350.jpg')]   justify-center  bg-no-repeat  bg-center min-h-screen flex flex-wrap">
      
      <h1></h1>
      <div className="   p-12 flex flex-auto">
        <h1 className="text-neon-blue font-bold text-6xl   hover:blur-none duration-1000 "> <span className="text-neon-pink saturate-150 font-bold">Georgia</span> Goose
        <span className="text-black-400 hover:text-neon-yellow hover:blur-none blur-sm duration-700 ">
          <p className="  hover:shadow-lg tracking-widest ring-2 ring-neon-green  hover:contrast-100 hover:saturate-200">Designs</p></span> 
        </h1>
        <div className="bg-stone-800 saturate-50 py-20">
        <h2 className="text-neon-yellow saturate-200 mx-4 text-center font-bold text-3x1  hover:text-black-950 "> <ul>Backend Dashboard platforms</ul>
        </h2>
        </div>
</div>
   <div className=" flex items-center justify-center bottom-40">
   <button type="submit" onClick={() => signIn('google')} className=" align-center justify-center text-stone-100 transition-1 transition-all transition-100 font-bold border-2 rounded-md border-l-neon-200 px-10 py-3 b opacity-80 hover:bg-stone-300 hover:shadow-lg bg-gradient-to-r from-stone-700 to-stone-800 tracking-widest ring-2 ring-stone-200 hover:brightness-125 hover:contrast-100 hover:saturate-200 hover:shadow-stone-100">Connect
    </button>
   </div>
   </div>
   </div>
      
  );

 }
  return (
    <div className=" bg-dodger-blue-secondary">
      <h1 className="text-white font-bold p-4 text-3xl hover:blur-none duration-1000 text-center">Georgia
      <span className=" text-neon-pink hover:text-2xl hover:text-neon-blue hover:transition-4 transition-all "> Goose</span>
      <span className="text-white hover:text-neon-yellow hover:blur-none blur-sm duration-700 pb-4 ">  Designs</span> 
         </h1> 
         <div className="block md:hidden items-center justify-center">
        
 </div>

         <div className="bg-[url('https://as1.ftcdn.net/v2/jpg/03/64/96/02/1000_F_364960224_0m7wI5OLXX5Fgg13qLECDmcTSKm2R2rI.jpg')] min-h-screen bg-no-repeat bg-cover bg-center ">
          <div className=" md:hidden flex items-center justify-center p-4">
          <button onClick={() => setShowNav(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" color="#F500EB" className="w-16 h-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
 </button>
 
          </div>
         <div className="flex">
         <Nav show={ showNav }/>
    <div className=" flex-grow text-2xl rounded-lg p-4 ">
    <div>{children}</div>
  </div>
  </div>
  </div>
  </div>
  );
}
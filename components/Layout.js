import { useSession, signIn, signOut } from "next-auth/react"
import Nav from '../components/Nav';




export default function Layout({children}) {
  const { data: session } = useSession()
 if (!session) {
  return (
    <div className="  mx-auto bg-[url('https://img1.wallspic.com/previews/0/3/5/8/3/138530/138530-urbanarea-water-light-city-blue-x350.jpg')]   justify-center  bg-no-repeat  bg-center min-h-screen flex flex-wrap">
      
      <h1></h1>
      <div className="   p-12 flex flex-auto">
        <h1 className="text-neon-blue font-bold text-6xl   hover:blur-none duration-1000 "> <span className="text-neon-pink saturate-150 font-bold">Georgia</span> Goose
        <span className="text-black-400 hover:text-neon-yellow hover:blur-none blur-sm duration-700 "> Designs </span> 
        </h1>
        <div className="bg-silver-200 saturate-50 py-20">
        <h2 className="text-neon-blue mx-4 text-center font-bold text-3x1 blur-sm hover:text-black-950 hover:blur-none duration-1000 "> <ul>Backend Dashboard platforms</ul>
        <ul>
          <li className=" text-neon-yellow saturate-200 hover:text-neon-blue ">putting businesses back in charge.
          </li>
          </ul> 
        </h2>
        </div>
</div>
   
   <div className=" flex items-center justify-center bottom-40">
   <button type="submit" onClick={() => signIn('google')} className=" align-center justify-center text-stone-100 transition-1 transition-all transition-100 font-bold border-2 rounded-md border-l-neon-200 px-10 py-3 b opacity-80 hover:bg-stone-300 hover:shadow-lg bg-gradient-to-r from-stone-700 to-stone-800 tracking-widest ring-2 ring-stone-200 hover:brightness-125 hover:contrast-100 hover:saturate-200 hover:shadow-stone-100">Connect
    </button>
   </div>
   </div>
  );

 }
  return (
    <div className=" p-12 flex flex-wrap">
      <h1 className="text-neon-blue font-bold text-6xl   hover:blur-none duration-1000 "> <span className="text-neon-pink saturate-150 font-bold">Georgia</span> Goose
      <span className="text-black-400 hover:text-neon-yellow hover:blur-none blur-sm duration-700 "> Designs </span> 
      </h1>
    <Nav/>
    <div className="flex-grow bg-black mt-2 mr-2 mb-2 rounded-lg p-4">
    <div>{children}</div>
  </div>
  </div>

  );
}
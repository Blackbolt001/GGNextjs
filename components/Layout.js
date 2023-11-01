import { useSession, signIn, signOut } from "next-auth/react"
import Nav from '../components/Nav';




export default function Layout({children}) {
  const { data: session } = useSession()
 if (!session) {
  return (
    <div className=" mx-auto bg-[url('https://www.hdwallpapers.in/download/tunnel_lights_reflection_on_road_black_background_hd_black_background-HD.jpg')]  justify-center bg-no-repeat bg-cover bg-center min-h-screen  flex flex-wrap">
      <div className="bg-black bg-cover h-96 w-full bg-center p-24 flex">
        <h1 className="text-white font-bold text-6xl hover:text-neon-blue">Georgia Goose
        <span className="text-black-400 hover:text-neon-yellow"> Designs </span> 
        </h1>
        <div>
        <h2 className="text-silver-600 mx-4 text-center font-bold text-3x1 hover:text-neon-blue"> <ul>Backend Dashboard platforms</ul>
        <ul>
          <li className=" text-stone-400 hover:text-dodger-blue-500">putting businesses back in charge.
          </li>
          </ul> 
        </h2>
        </div>
   </div>
   
   <div className=" flex items-center justify-center">
   <button type="submit" onClick={() => signIn('google')} className=" align-center justify-center text-stone-100 transition-1 transition-all transition-100 font-bold border-2 rounded-md border-l-neon-200 px-10 py-3 bg-transparent opacity-80 hover:bg-stone-300 hover:shadow-lg bg-gradient-to-r from-stone-700 to-stone-800 tracking-widest ring-2 ring-stone-200 hover:brightness-125 hover:contrast-100 hover:saturate-200 hover:shadow-stone-100">Connect
    </button>
   </div>
   </div>
  );

 }
  return (
   <div className="bg-[url('https://4kwallpapers.com/images/wallpapers/windows-11-dark-mode-abstract-background-black-background-2560x2560-8710.jpg')] justify-center bg-no-repeat bg-cover bg-center min-h-screen flex">
    <Nav/>
    <div className="flex-grow bg-black mt-2 mr-2 mb-2 rounded-lg p-4">
    <div>{children}</div>
   <div className="bg-stone-800 text-bold text-2xl mt-2 mr-2 mb-2 rounded-lg p-4">
Nothing
   </div>
   </div>
  </div>
  );
}
import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "@/components/Layout";
import Draggable from "react-draggable";

export default function Home() {
  const {data: session} = useSession();
  console.log({session});

return (
<Layout>
  <div className="flex justify-between">
    <h2>
hello,<b> {session?.user?.name}</b>
  </h2>
  <Draggable>
  <div className="flex bg-silver-800  rounded-lg overflow-hidden">
<img src={session?.user?.image} alt="" className="w-8 h-8"/>
<span className="px-2">
  {session?.user?.name}
</span>
</div>
</Draggable>
    </div>
    </Layout>
)}

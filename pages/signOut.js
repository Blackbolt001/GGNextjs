import Layout from "@/components/Layout";
import {useRouter} from "next/router";
import { signOut } from "next-auth/react";

export default function Products() {
const router = useRouter();
async function logout () {
    await router.push('/');
    await signOut();
}

    return (
        <Layout>Sign Out Page
            <div className=" flex py-2 ">
                Sign Out from your account 
        <button onClick={logout} className="btn-primary">sign out</button>
        </div>
        </Layout>
    )
}
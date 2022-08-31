import { ChildProcess } from "child_process";
import { useSession } from "next-auth/react";
import Router, { useRouter } from "next/router";
import React, { useEffect } from "react";

const Protect=({children}:{children:React.ReactNode})=>{
    const {status}=useSession()
    console.log("Protective status: ",status)
    const router=useRouter()
    useEffect(()=>{
        if(status==='unauthenticated'){
            router.push('/')
        }
    },[router,status])
    if(status=='unauthenticated'){
        return null
    }
    return (
        <>
        {children}
        </>
    )
}
export default Protect
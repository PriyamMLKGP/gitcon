import React from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import Protect from "./Protect"
//array
const authRoutes=['/dashboard']
const AuthWrapper = ({children}:{
    children:React.ReactNode
})=>{
    const {status}=useSession()
    if(status==='loading')
    return null
    return <>
        <Protect>
            {children}
        </Protect>
    </>
}
export default AuthWrapper
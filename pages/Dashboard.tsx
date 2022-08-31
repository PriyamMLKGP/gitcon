import { useSession } from 'next-auth/react'
import React from 'react'
import { signOut } from 'next-auth/react'
import styles from '../styles/Home.module.css'
const Dashboard = () => {
    const {data}=useSession()
    const RepoCreation=()=>{

    }
    const HandleSignOut=()=>{
        return (
            
            signOut({
                callbackUrl:'https://gitcon.herokuapp.com/',
            })
        )
    }
    return (<>
    <h1>Welcome {data?.user?.name}</h1>
    <button className={styles.button} onClick={HandleSignOut}>Logout
        </button>
    <button onClick={RepoCreation}>Create A Sample repository</button>
    </>
  )
}

export default Dashboard
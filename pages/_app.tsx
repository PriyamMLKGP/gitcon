import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import {SessionProvider} from 'next-auth/react'
import  AuthWrapper from '../components/AuthWrapper'
import Link from 'next/link'
import Dashboard from './Dashboard'
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }: AppProps) {
  const router=useRouter()
  return (
  <SessionProvider session={pageProps.session}>
    {router.pathname==="/"?
    (<>
    <Header/>
    <Component {...pageProps} /></>
    )
    :
    (<AuthWrapper>
      <Dashboard/>
    </AuthWrapper>)
    } 
  </SessionProvider>
  )
}

export default MyApp

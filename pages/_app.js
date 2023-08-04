import '@/styles/globals.css'
import Navbar from "../components/Navbar"
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return(
    <>
    <Navbar/>
    <div className='h-14 md:h-0'></div>
   <Component {...pageProps}/>
   <Footer/>
    </>
)}

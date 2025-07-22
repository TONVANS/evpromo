'use client'
import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Aoscompo = ({children}:any) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
  return (
    <div>
      {children}
    </div>
  )
}

export default Aoscompo

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {heroVideo,smallHeroVideo} from '../utils'
import { useState } from "react"
import { useEffect } from "react"

const Hero = () => {
  const [videoSrc,setVideoSrc]=useState(window.innerWidth<760?smallHeroVideo:heroVideo)

  useGSAP(()=>{
    gsap.to('#hero',{
      opacity:1,
      duration:2,
      y:15,
      delay:1
    })
    gsap.to('#cta',{
      opacity:1,
      y:-70,
      duration:2,
      delay:2
    })
  },[])


   const handleVideo =()=>{
    if (window.innerWidth<760){setVideoSrc(smallHeroVideo)}
    else{
      setVideoSrc(heroVideo)
    }

   }
   useEffect(()=>{
      window.addEventListener('resize',handleVideo)
      return ()=>window.removeEventListener('resize',handleVideo)
   },[])

  return ( 
   <section className="w-full nav-height bg-black relative ">
      <div className="flex-center h-5/7 w-full flex-col">
          <p id='hero' className="hero-title">iPhone 20 pro</p>
      </div>
      <div className="w-8/5 ">
        <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc} >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div id="cta" 
      className="flex flex-col items-center opacity-0">
       <a href="#highlights" className="btn">Buy</a>
       <p className="font-normal text-gray-100 text-xl"> From $199/month or $999</p>
      </div>
   </section>
  )
} 

export default Hero
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
const Hero = () => {

  useGSAP(()=>{
    gsap.to('#hero',{
      opacity:1,
      duration:2,
      y:-100,
      delay:2
    })
  },[])

  return ( 
   <section className="w-full nav-height bg-black relative">
      <div className="flex-center h-5/6 w-full flex-col">
          <p id='hero' className="hero-title">iPhone 20 pro</p>
      </div>
   </section>
  )
}

export default Hero
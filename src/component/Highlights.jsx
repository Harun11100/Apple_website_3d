import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import Videocarosel from "./Videocarosel"
import ScrollTrigger from 'gsap/all'
import { animateWithGsap } from "../utils/animations"


gsap.registerPlugin(ScrollTrigger)


const Highlights = () => {


  useGSAP(()=>{
    animateWithGsap('#title',{
        y:0,
        opacity:1,
     
    })
  
},[])

useGSAP(()=>{
  animateWithGsap('#link',{
    y:0,
    opacity:1,
    stagger:1,
    duration:3,
   
})

},[])


  // useGSAP(()=>{
  
  //   gsap.to('.link',{
  //     opacity:1,
  //     y:0,
  //     duration:3,
  //     stagger:1,
  //   })
  // },[])
  
  return (
    <section id="highlights" className="bg-zinc common-padding w-screen overflow-hidden h-full">
     <div className="screen-max-width">

      <div className="mb-12 w-full md:flex items-end justify-between">
         <h1 id='title' className="section-heading">Get the highlights</h1>
         <div className="flex flex-wrap items-end gap-5">
          <p className="link">Watch the film
            <img src={watchImg} alt="watch"  className="ml-2"/>
          </p>
          <p className="link">Watch the event
            <img src={rightImg} alt="right"  className="ml-2"/>
          </p>

         </div>
      </div>

      <Videocarosel/>
    </div>

    </section>
  )
}

export default Highlights
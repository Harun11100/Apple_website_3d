import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import { animateWithGsap } from '../utils/animations'
import gsap from 'gsap'

const HowItWorks = () => {

  const videoRef=useRef()

    useGSAP(()=>{
      
      // animateWithGsap('.g_fadeIn',{
      //       y:0,
      //       opacity:1,
      //       ease:'power2.inOut',
      //       duration:2
      // }),

      gsap.to('.g_fadeIn',{
             scrollTrigger:{
                  trigger:'.g_fadeIn',
                  start:"-20% bottom"
             },
             opacity:1,
             ease:'power2.inOut',
             duration:1,
             y:0
      })



      gsap.to('#hiw-video',{
            scrollTrigger:{
               trigger:'#hiw-video',
                start:'-10% bottom',
                toggleActions:'restart reverse restart reverse',
            },
            onComplete:()=>{
                  videoRef.current.play()
            }
           
      })

     gsap.from('#chip',{
        scrollTrigger:{
            trigger:'#chip',
            start:'30% bottom',
            toggleActions:'restart reverse restart reverse'
        },
        opacity:0,
        ease:'power2.inOut',
        scale:2,
        duration:2
     })
      
    },[])


  return (
    <section className='common-padding'>
         <div className='screen-max-width'>
            <div id='chip' className='flex-center w-full my-10 '>

            <img src={chipImg} alt="chip" width={180} height={180} />
            </div>
            <div className='flex flex-col items-center'>
                  <h2 className='hiw-title'>
                      A17 Pro Chip<br/>
                      A monater win for gaming.
                  </h2>
                  <p className='hiw-subtitle'>
                        It's here, The biggest redesign in the apple history of GPUs.
                  </p>
            </div>
            <div className='mt-10 md:mt-20 mb-14'>
                   <div className='relative flex-center h-full'>
                        <div className='overflow-hidden'>
                              <img src={frameImg} alt="frame"
                              className='bg-transparent relative z-10'/>
                             
                        </div>
                        <div className='hiw-video'>
                                    <video id='hiw-video' autoPlay muted playsInline preload='none' ref={videoRef} className='pointer-events-none'>
                                          <source src={frameVideo} type='video/mp4' />
                                    </video>
                              </div>
                   </div>
                   <p className='font-semibold pb-20 text-xl text-gray-50 text-center mt-5'>
                       Honkai: Star Rail
                   </p>
                   <div className='hiw-text-container'>
                       <div className='flex flex-1 justify-center flex-col'>
                           <p className='hiw-text g_fadeIn'>
                              A17 Pro is an entity new class of iPhone chip that delivers our  {' '}
                              <span className='text-white'>
                              best graphics performance by far
                              </span> 
                           </p>
                       </div>
                       <div className='flex flex-1 justify-center flex-col'>
                           <p  className='hiw-text g_fadeIn'>
                              Mobile 
                              <span className='text-white'>
                                 games will look and feel so immersive
                              </span>
                              with incredibly detailed environments and more realistic characters. And with industry- leading speed and effeciency. A17 Pro takes fast and runs with it.
                           </p>
                       </div>
                       <div className=' flex flex-1 justify-center flex-col g_fadeIn'>
                           <p className='hiw-text'>New</p>
                           <p className='hiw-bigtext'>Pro-class GPU</p>
                           <p className='hiw-text'>with 6 cores</p>
                       </div>
                    </div>
            </div>
         
              
         </div>
    </section>
  )
}

export default HowItWorks
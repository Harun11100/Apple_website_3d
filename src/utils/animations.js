export const animateWithGsapTimeLine=(timeline,rotationRef,roatationState,firstTarget,secondTarget,animationProps)=>{

      timeline.to(rotationRef.current.rotation,{
           
            y:roatationState,
            duration:1,
            ease:'power2.inOut'
      })

      timeline.to(firstTarget,{
           
          ...animationProps,
          ease:'power.2inOut',


      },
      '<'
)
timeline.to(secondTarget,{
           
      ...animationProps,
      ease:'power.2inOut',


  },
  '<'
)





}
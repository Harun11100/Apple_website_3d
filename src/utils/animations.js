import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

export const animateWithGsap=(target,animationProps,scrollProps)=>{

          gsap.to(target,{
            ...animationProps,scrollTrigger:{
              trigger:target,
              toggleActions:'restart reverse restart reverse',
            
              start:'top 95%',
              ...scrollProps,
            }
          })

}


export const animateWithGsapTimeLine = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {

      // Animate the rotation of the 3D model
      timeline.to(rotationRef.current.rotation, {
        y: rotationState,    // Rotating the model on the y-axis
        duration: 1,
        ease: 'power2.inOut'  // Correct easing function
      });
    
      // Animate the first DOM target (e.g., view1)
      timeline.to(firstTarget, {
        ...animationProps,    // Applying the passed animation properties
        ease: 'power2.inOut', // Correct easing function
      }, '<');  // Start at the same time as the previous animation
    
      // Animate the second DOM target (e.g., view2)
      timeline.to(secondTarget, {
        ...animationProps,
        ease: 'power2.inOut',
      }, '<');  // Also starts at the same time
    };
    
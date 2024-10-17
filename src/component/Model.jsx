import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ModelView from "./ModelView"
import { useRef, useState } from "react"
import {yellowImg } from '../utils'
import * as THREE from 'three'
import { Canvas } from "@react-three/fiber"
import { View } from "@react-three/drei"
import {models, sizes} from '../constants'

const Model = () => {

      const [size,setSize]=useState('small')
      const [model,setModel]=useState({
            title:'iPhone 20 Pro in Natural Titanium',
            color:['#8e8a82', '#f4ecd9','#b0afac'
            ],
            img:yellowImg
      })
// camera control for the view
      const cameraControlSmall=useRef();
      const cameraControlLarge=useRef();

      // model size

      const small=useRef(new THREE.Group());
      const large=useRef(new THREE.Group()); 

      //Model rotation 
      const [smallRotation, setSmallRotation]=useState(0);

      const [largeRotation, setLargeRotation]=useState(0);

      useGSAP(()=>{

            gsap.to('#heading',{
                  y:10,
                  duration:2,
                  opacity:1
            })
      },[])
  return (
   <section className="common-padding">
      <div className="screen-max-width text-white">
            <h1 id="heading" className="section-heading text-white">
                  Take a closer look
            </h1>

            <div className="flex flex-col items-center mt-5">
                  <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                    
                   <ModelView
                   index={1}
                   groupRef={small}
                   gsapType='view1'
                   controlRef={cameraControlSmall}
                   setRotationState={smallRotation}
                   item={model}
                   size={size}
                   />
                    <ModelView
                   index={2}
                   groupRef={large}
                   gsapType='view2'
                   controlRef={cameraControlLarge}
                   setRotationState={largeRotation}
                   item={model}
                   size={size}
                   />
                  <Canvas className="w-full h-full" style={{position:'fixed',top:0,
                        bottom:0,
                        left:0,right:0,
                        overflow:'hidden'
                  }}
                  eventSource={document.getElementById('root')}
                  >

                  <View.Port/>
                  </Canvas>
                  </div>
                  <div className="mx-auto w-full">
                         <p className="text-sm sm:tex-xl font-light text-center mb-5">
                              {model.title}
                         </p>
                         <div className="flex-center">
                             <ul className="color-container">
                              {models.map((item)=>(
                              <li key={item.id} className="w-6 h-6 rounded-full mx-2 " style={{
                                    backgroundColor:item.color[0],
                              }}
                              onClick={()=>setModel(item)}
                              />
                             
                              ))}
                             </ul>

                             <button className="size-btn-container">
                              {sizes.map(({label,value})=>
                              <span key={label} className="size-btn" style={{backgroundColor:size===value?'white':'transparent',color:size===value?'black':'white'}} onClick={()=>setSize(value)}>
                                    {label}
                              </span>)}
                             </button>
                         </div>
                  </div>
            </div>
      </div>
   </section>
  )
}

export default Model
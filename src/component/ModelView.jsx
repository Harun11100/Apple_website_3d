import { PerspectiveCamera, View } from "@react-three/drei"
import Light from './Light'
import { Suspense } from "react"
import Iphone from './Iphone'
import * as THREE from 'three'
import { OrbitControls } from "@react-three/drei"
import Loader from './Loader'

const ModelView = ({index,item,size,groupRef,controlRef,gsapType,setRotationSize}) => {
  return (
   <View 
   index={index}
   id={gsapType}
   className={`h-full w-full absolute ${index===2 ? 'right-[-100%]':''}`}>
  <ambientLight intensity={20}/>
  <PerspectiveCamera makeDefault position={[2,1,4]}/>
  <Light/>
  
  <OrbitControls 
  makeDefault
  ref={controlRef}
  enableZoom={false}
  enablePan={false}
  rotateSpeed={0.4}
  target={new THREE.Vector3(0,0,0)}
  onEnd={()=>setRotationSize(controlRef.current.getAzimuthalAngle())}
  />
    <group ref={groupRef} name={`${index===1}? 'small':'large'`} position={[0,0,0]}>
    <Suspense
     fallback={<Loader/>}
    >
  
    <Iphone 
     scale={index===1?[15,15,15]:[17,17,17]}
     item={item}
     size={size}/>
    </Suspense>
    </group>
   </View>
  )
}

export default ModelView

import highlightsSlide from "../constants"

const Videocarosel = () => {
  return (
   <>
   <div className="flex items-center">
      hello
 {highlightsSlide.map((list)=>(
            <div key={list.id} id="slider">
                 <div className="video-carousel_container">
                  hello

                 </div>
                 
            </div>
       ))} 
   </div>
   </>
  )
}

export default Videocarosel
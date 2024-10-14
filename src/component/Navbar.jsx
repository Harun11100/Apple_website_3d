import Logo from "./Logo"
import Searchbar from "./Searchbar"
import Shopping from "./Shopping"
const Navbar = () => {

  return ( 
  <div className="w-full flex flex-1 justify-between">
      <Logo/>
       <div className="flex flex-1 justify-center  max-sm:hidden pt-3 font-normal screen-max-width">
           
            {['iPhone','Macbook','iPad','Support'].map(i=>(
                  <div key={i} className="px-5 text-sm text-gray-100 hover:text-white cursor-pointer transition-all">
                        {i}
                  </div>
            ))}
    
       </div>
       <div className="flex items-baseline gap-6 px-10 cursor-pointer">
       <Searchbar/>
       <Shopping/>

       </div>
      
  </div>
 
  )
}

export default Navbar
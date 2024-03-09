import React from 'react'
import Link from 'next/link'

  
    // function cliclHandler(){
    //     return(
    //        <div>
    //    
    //        </div>
    //     )
    // }

const page = () => {
  return (
    <div className="w-screen h-[830px] bg-zinc-300 fle flex-col justify-center align-center text-center text-[50px]">
        
         <div className="flex flex-col justify-center items-center ">
           
             signup karna hai apko
        
          <Link className='border border-zinc-600 rounded-lg text-[30px] px-3' href="/signup/sbi">sign up</Link>
        </div> 
   </div>
  )
}

export default page

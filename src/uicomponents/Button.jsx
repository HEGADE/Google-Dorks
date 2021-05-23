import React ,{useContext}from 'react'
import {storeStore} from "../state/Store"


const Button = ({type}) => {
    function Search(e) {
        if(e.target.innerText==="Filter")
         return google(search, exclude, sites);
        
      }
      const {google,search,exclude,sites} =useContext(storeStore)

    return (
        <>
               
        <button type="submit" onClick={Search}>
           {type}
          </button>
            
        </>
    )
}

export default Button


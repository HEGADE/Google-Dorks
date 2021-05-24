import React ,{useContext}from 'react'
import {storeStore} from "../state/Store"


const Button = ({type}) => {
    const {google,numberFinder,search,setSearch,exclude,sites} =useContext(storeStore)

    function Search(e) {
        console.log(e.target.innerText);
        if(e.target.innerText==="Filter")
         return google(search, exclude, sites);
        if(e.target.innerText==="Find")
         return numberFinder(search);
        if(e.target.innerText==="Search")
         return numberFinder(search);
        
      }
   
    return (
        <>
               
        <button type="submit" onClick={Search}>
           {type}
          </button>
            
        </>
    )
}

export default Button


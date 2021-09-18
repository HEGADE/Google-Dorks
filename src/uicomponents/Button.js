import React ,{useContext}from 'react'
import {storeStore} from "../state/Store"
import {userFinder} from "../helper/userFinder"


const Button = ({type}) => {
    const {google,numberFinder,search,exclude,sites,fileType,exactSearch} =useContext(storeStore)

    function Search(e) {
        if(e.target.innerText==="Filter"){
            return google(search, exclude, sites,fileType,exactSearch);
        }
        
        if(e.target.innerText==="Find")
         return numberFinder(search);
        if(e.target.innerText==="Search")
         return userFinder(search,exclude,sites);
        
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


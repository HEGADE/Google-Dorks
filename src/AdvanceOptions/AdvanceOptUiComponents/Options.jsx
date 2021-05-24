import React,{useState,useContext} from "react";
import {storeStore} from "../../state/Store"
import {useCleaner} from "../../helper/useCleaner"
function Options({ text,color}) {
  let colordiv=document.getElementsByClassName("colordiv")
  const {setSearch:ser,setExclude,setSites}=useCleaner()
  const { setphoneOrInsta} =useContext(storeStore)

  const showOption=(e)=>{
    Array.from(colordiv).forEach(e=>{
      e.style.backgroundColor="orangered"
      ser("")
      setExclude("")
      setSites("")
    })
   
    if(e.target.innerText==="Phone"){
      e.currentTarget.style.backgroundColor="blue"
      setphoneOrInsta(phone=>!phone)
      ser("")
      setExclude("")
      setSites("")
    }
   
    if(e.target.innerText==="Insta") {
      e.currentTarget.style.backgroundColor="blue"
      setphoneOrInsta(phone=>!phone)
      ser("")
      setExclude("")
      setSites("")
      

    
   }
 
  }

  return (
    <>
      <div  onClick={showOption} className="colordiv"  style={{"backgroundColor":color}} >
        <strong >{text}</strong>
      </div>
    </>
  );
}

export default Options;

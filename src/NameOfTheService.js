import React,{ useEffect ,useState} from "react";
import Reviews from "./components/Reviews.js";
import Slider from "./components/Slider.js";
import axios from "axios"

import "./index.css";

function NameOfTheService () {
  const [count, setCount] = useState(2);
  const [reponse, setReponse] = useState([]);
const[counter,setCounter]=useState(0)



  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=40344',{ headers: {"Authorization" : `${'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'}`} })
    .then((res)=>{
    

console.log(res.data);
setReponse(res.data.results)
  
      
    }
    
    )
  },[]);
var addcounter=()=>{
  var a=count+2
setCount(a)
}
var addhelp=()=>{
  var b= counter+1
  setCounter(b)
}
  return (
   
    <div className=" min-h-screen grid grid-cols-8 gap-4   "> 
   { console.log(count)}
     <Slider />
    <Reviews counter={counter} response={reponse} count={count} addcounter={()=>addcounter() } addhelp={()=>addhelp()}  />
    </div>
  );
};

export default NameOfTheService;

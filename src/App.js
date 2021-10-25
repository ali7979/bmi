import bmi from "./images/bmi.png"
import './App.css';

import { useState } from "react";

function App() {
const [height, setheight] = useState("")
const [weight, setweight] = useState("")
const [rsult, setrsult] = useState(0)
const [ktext, setktext] = useState("")
var calc=async function(e){
  
await setweight(e.target.value);

}
var calc2=async function(e)
{
 
  await setheight(e.target.value)
  }

var res=()=>{
 
  var wt=parseFloat(weight);
  var ht=parseFloat(height);
  console.log(wt)
  console.log(ht)
var bmii=wt/(ht*ht);
console.log(bmii);
var k=Math.floor(bmii);
setrsult(k);
if(k<18.5){
  setktext("Underweight");
}
else if(k>18.5 && k<24.9){
  setktext("Normal weight");
}
else if(k>25 && k<29.9){
  setktext("Overweight");
}
else if(k>30 && k<34.9){
  setktext("Obesity class I");
}
else if(k>35 && k<39.9){
  setktext("Obesity class II");
}
else if(k>40){
  setktext("Obesity class III");
}
else{
  setktext("");
}
}
  return (
    <>
    <div className="container">

<div className="box">

			
      <h1 className="heading">BMI CalCulator</h1>
      <h1 className="res" style={{display:"block"}}>Your BMI is {rsult} {ktext} </h1>
<img src={bmi}/>

<div className="right">
<div className="two">
  <h1> Enter Details</h1>
<input className="inp" placeholder="Enter Weight (kg)" onChange={calc}></input>
<input className="inp" placeholder="Enter Height (m)" onChange={calc2}></input>
</div>

<button class="button" onClick={res}>Click Me</button>


</div>







</div>
</div>















    </>
  );
}

export default App;

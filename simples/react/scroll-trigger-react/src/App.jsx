import {useRef,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import  gsap  from 'gsap'
import  {ScrollTrigger}  from 'gsap/ScrollTrigger'
import './App.css'
gsap.registerPlugin(ScrollTrigger)

function App() {
const imgRef=useRef(null);
useEffect(()=>{
const el=imgRef.current;
gsap.fromTo(el,{
rotation:0
},{
  rotation:180,duration:3,repeat:-1,scrollTrigger:{
    trigger:el,
  }
});
},[])
  return (
    <>
    <div className="helper"></div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" ref={imgRef}/>
      </a>
    </>
  )
}

export default App

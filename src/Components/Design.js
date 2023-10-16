import { useState } from "react";
import "../App.css"
function Design(){
    const[val,set_val]=useState(true);
    const[color_pick,set_color_pick]=useState("#64CCC5")
    const change_color={
       backgroundColor:color_pick
    }
    function test(e){
        set_color_pick(e.target.style.backgroundColor);
        console.log(e.target.style.backgroundColor);
        set_val(true);

    }
    function hid(){
        set_val(false);
    }
    return(<>
    <div className="myStyle mx-auto d-flex flex-column justify-content-center" style={change_color}>
        <div  className="color_contain d-flex align-items-center justify-content-center" style={change_color}>
        <button hidden={val} className="block btn shadow-lg p-3 mb-5 rounded border border-dark" style={{backgroundColor:"#E3FDFD"}} onClick={test}></button>
        <button hidden={val} className="block btn shadow-lg p-3 mb-5 rounded border border-dark" style={{backgroundColor:"#FFC7C7"}} onClick={test}></button>
        <button hidden={val} className="block btn shadow-lg p-3 mb-5 rounded border border-dark" style={{backgroundColor:"#08D9D6"}} onClick={test}></button>
        <button hidden={val} className="block btn shadow-lg p-3 mb-5 rounded border border-dark" style={{backgroundColor:"#F9ED69"}} onClick={test}></button>
        <button hidden={val} className="block btn shadow-lg p-3 mb-5 rounded border border-dark" style={{backgroundColor:"#F08A5D"}} onClick={test}></button>
        <button hidden={val} className="block btn shadow-lg p-3 mb-5 rounded border border-dark" style={{backgroundColor:"#FF2E63"}} onClick={test}></button>
        <button hidden={val} className="block btn shadow-lg p-3 mb-5 rounded border border-dark" style={{backgroundColor:"#AD8B73"}} onClick={test}></button>
        <button hidden={val} className="block btn shadow-lg p-3 mb-5 rounded border border-dark" style={{backgroundColor:"#116D6E"}} onClick={test}></button>
        <button hidden={val} className="block btn shadow-lg p-3 mb-5 rounded border border-dark" style={{backgroundColor:"#610C9F"}} onClick={test}></button>
        <button hidden={val} className="block btn shadow-lg p-3 mb-5 rounded border border-dark" style={{backgroundColor:"#BE9FE1"}} onClick={test}></button>
        <button hidden={val} className="block btn shadow-lg p-3 mb-5 rounded border border-dark" style={{backgroundColor:"#A75D5D"}} onClick={test}></button>
        </div>
        <button onClick={hid} className="title align-self-center">Pick any color</button>
    </div>

   




    </>);
}
export {Design};
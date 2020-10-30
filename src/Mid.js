import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import "./mid.css";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function Mid({link1,link2}){
    if(!link1.includes("www."))
        link1="www."+link1;
    if(!(link1.includes("https://")||link1.includes("https://")))
        link1="http://"+link1;
    if(!link2.includes("www."))
        link2="www."+link2;
    if(!(link2.includes("https://")||link2.includes("https://")))
        link2="http://"+link2;
    console.log(link1);
    console.log(link2);
    return (
        <div className="row h-100 justify-content-around">
        <div className="col-6 h-100 frameContainer d-flex " >
        {   
            (link1=="http://www.")?<div className="enterUrl  align-self-center m-auto p-1">Enter Link 1 To Open In This View</div>:
            <iframe className="frame" frameborder="0"  src={link1} ></iframe>
            // <div className="invalid align-self-center m-auto p-1">Please Enter Valid Link</div>)
        }
        </div>
        <div className="col-6 h-100 frameContainer d-flex">
        {   
            (link2=="http://www.")?<div className="enterUrl align-self-center m-auto p-1">Enter Link 2 To Open In This View</div>:
            <iframe className="frame m-0 p-0" frameborder="0" src={link2} ></iframe>
            // <div className="invalid align-self-center m-auto p-1">Please Enter Valid Link</div>)
        }
        </div>
        </div>
    );
   }
   
export default Mid;
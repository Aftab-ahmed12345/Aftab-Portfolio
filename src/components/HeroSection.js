import React from 'react';
import Image from "../assets/images/aftab-img.jpg";

function HeroSection() {
return (
    <>
        <div className='container'>
        <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 " style={{paddingTop:"15rem", paddingBottom:"10rem", paddingLeft:"8rem", }} >
                    <h1 > Hi,  
                        <br></br>
                        <span className="">
                          Aftab Ahmed Here
                        </span>
                    </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, doloribus.</p>
         </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
            <img className="image" style={{width:"20rem", height:"20rem", marginTop:"10rem", marginLeft:"13rem", borderRadius:"10rem"}} 
            src={Image} />
        </div>
        </div>   
        </div>
    </>
)
}

export default HeroSection

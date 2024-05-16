import React from "react";
import HeaderComponent from "../header/header";
import './wrapper.css'

function Wrapper() {
    return (
        <div className="w-full text-white">
            <div className="w-full h-screen firstPage" >
                <HeaderComponent />
                <div className="w-[68%] m-auto">
                    <div className="text-[50px] mt-[115px] font-medium">
                        <span className="text-[#E5B093]">AI ПОМОЩНИК</span>
                        <span>, КОТОРЫЙ</span><br /> <span>ПОМОЖЕТ ВАМ ПОЛУЧИТЬ</span><br />
                        <span className="text-[#E5B093]">КАЧЕСТВЕННУЮ </span><br />
                        <span>МЕДИЦИНСКУЮ ПОМОЩЬ</span>
                    </div>
                    <p></p>
                    <button></button>
                </div>
            </div>
        </div>
    );
}

export default Wrapper; 
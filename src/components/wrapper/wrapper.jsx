import React from "react";
import HeaderComponent from "../header/header";
import './wrapper.css'
import bulits from '../../assets/bulits.svg'
import CoverFlow from "../swiper/swiper";

function Wrapper() {
    return (
        <div className="w-full text-white font-montserrat ">
            <div className="w-full  firstPage" >
                <HeaderComponent />
                <div className="w-[68%] m-auto">
                    <div className="text-[50px] mt-[115px] font-montserrat leading-[4rem]">
                        <span className="text-[#E5B093]">AI ПОПУТНИК</span>
                        <br />
                        <span>НА ПУТИ К</span><br />
                        <span className="text-[#E5B093]">ЗДОРОВЬЮ</span>
                    </div>
                    <p className="text-[18px] w-[480px] font-sans font-normal mt-2">Избавьтесь от неприятностей, сопровождающие визит к врачу, с помощью нашего сервиса и опробуйте на себе удобство Avicenna AI</p>
                    <button className="btn-prime mt-[70px] h-[90px] w-[340px]">Попробовать Avicenna AI</button>
                    <img src={bulits} alt="" className="mt-[118px] pb-[100px]" />
                </div>
            </div>
            <div className="w-full h-screen secondPage">
                <h1 className="uppercase text-[48px] flex justify-center text-center mb-10 font-montserrat font-normal">Ваше здоровье  <br /> в ваших руках</h1>
                <div className="w-[359px] text-[20] font-light flex flex-col items-start ml-[1100px]">
                    <p>Консультация у врача часто <br /> сопровождается тратой большого <br /> количества времени, денег и сил, а <br /> назначенное лечение не всегда <br /> оказывает пациенту должного <br /> результата. </p>
                    <p className="mt-[22px]">В свою очередь, Anicenna AI  может <br /> предложить подходящего в вашем <br /> случае специалиста, тщательно  <br />проанализировав ваши сообщения <br /> о самочувствии и состоянии. После <br />этого вы можете связаться с <br /> рекомендованным специалистом  и <br /> назначить консультацию.</p>
                    <button className="btn-prime text-[14px]  mt-[40px] h-[70px] w-[260px]">ЗАБРОНИРОВАТЬ</button>
                </div>
            </div>
            <CoverFlow />
            <div className="bg-[#010E54FF]">
                
            </div>

        </div>
    );
}

export default Wrapper; 
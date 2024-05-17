import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const photos = [
    'https://images.pexels.com/photos/7469387/pexels-photo-7469387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7469289/pexels-photo-7469289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/6213729/pexels-photo-6213729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/6213739/pexels-photo-6213739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

export default function CoverFlow() {
    return (
        <section className="pt-[7rem] pb-[2rem] bg-[#DAEAF7FF]">
            <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
               
                <Swiper
                    modules={[EffectCoverflow, Pagination]}
                    effect={'coverflow'}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={3}
                    pagination={{
                        clickable: true,
                    }}
                    centeredSlides={true}
                    grabCursor={true}
                    coverflowEffect={{
                        rotate: 0,
                        slideShadows: false,
                    }}
                    className="coverflow"
                >
                    {photos.map((p, index) => (
                        <SwiperSlide key={index}>
                            <img src={p} alt={`Slide ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

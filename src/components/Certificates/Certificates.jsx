import React from 'react'
import "./Certificates.css";
import { Data } from "./Data";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

function Certificates() {
  return (
    <section className="certificates container section">
        <h2 className="section__title">Certificates</h2>
        <span className="section__subtitle"></span>
       
        <Swiper className="certificates__container"
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            }
          }}
        modules={[Pagination]}>
            {Data.map(({id, image, title, description}) => {
              return (
                <SwiperSlide className="certificates__card" key={id}>
                  <img src= {image} alt=""className="certificates__img" />
                </SwiperSlide>
              )
            })}
        </Swiper>
    </section>
  )
}

export default Certificates
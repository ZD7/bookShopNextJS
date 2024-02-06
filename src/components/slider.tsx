import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import Image from "next/image";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import styled from "styled-components";
import "swiper/swiper-bundle.min.css";

export default function Slider() {
  return (
    <Container>
      <Swiper
        modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        spaceBetween={500}
        navigation
      >
        <SwiperSlide>
          <Image src={banner1} alt="banner1" width={1120} height={702} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} alt="banner2" width={1120} height={702} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner3} alt="banner3" width={1120} height={702} />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 1120px;
  justify-content: center;
  height: 731px;

  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper-pagination-bullet {
    cursor: pointer;
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    opacity: 1;
    background-color: #efeef6;
  }
  .swiper-pagination-bullet-active {
    background-color: #9e98dc;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #9e98dc;
  }
`;

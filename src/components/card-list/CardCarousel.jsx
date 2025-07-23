import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardFrom from '../card/CardFrom';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const SlideWrapper = styled.div`
  padding: 20px 0;
`;

function CardCarousel({ cardList }) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const ListSlider = () => {
    return (
      <SlideWrapper>
        <StyledSwiper
          freeMode={true}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          breakpoints={{
            360: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            1140: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {cardList.map((card) => (
            <SwiperSlide key={card.id}>
              <CardFrom card={card} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </StyledSwiper>
      </SlideWrapper>
    );
  };

  return (
    <PaperListContainer>
      <ListSlider />
    </PaperListContainer>
  );
}

export default CardCarousel;

const PaperListContainer = styled.div`
  width: 100%;
`;

const StyledSwiper = styled(Swiper)`
  height: 100%;
  position: relative;
  padding: 0 20px; // 양옆 여백
  box-sizing: border-box;

  .swiper-button-prev,
  .swiper-button-next {
    color: black;
    background: white;
    border: 1px solid #dadcdf;
    border-radius: 50%;
    opacity: 0.9;
    width: 40px;
    height: 40px;
    font-size: 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      font-size: 16px;
    }
  }

  .swiper-button-prev {
    left: 4px;
  }

  .swiper-button-next {
    right: 4px;
  }
`;

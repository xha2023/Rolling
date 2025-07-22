import styled from 'styled-components';
// import Slider from 'react-slick';
import React, { useEffect, useState } from 'react';
import CardFrom from '../card/CardFrom';
// import { paperCardSettings } from '@/util/carousel.jsx';
// import { NextArrow, PrevArrow } from '@/styles/button/ArrowButton.jsx';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PaperListContainer = styled.div`
  width: 100%;

  /* @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  } */

  /* @media (min-width: 1200px) {
    width: 116rem;
  } */
`;

// const PaperListSlider = styled(Slider)`
//   .slick-prev::before,
//   .slick-next::before {
//     opacity: 0;
//     display: none;
//   }

//   padding-left: 2rem;
// `;

// const ListSlider = styled.div`
//   .slick-prev::before,
//   .slick-next::before {
//     opacity: 0;
//     display: none;
//   }

//   padding-left: 2rem;
// `;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  margin: 0 24px;
  position: relative;

  /* .swiper-slide {
    width: 275px;
    height: 260px;
    flex-shrink: 0;
  } */
  .swiper-button-prev,
  .swiper-button-next {
    color: white;
    background: black;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      font-size: 14px;
    }
  }

  .swiper-button-prev {
    left: -16px;
  }

  .swiper-button-next {
    right: -16px;
  }
`;

const SlideWrapper = styled.div`
  width: 100%;
  padding: 0 16px; // 양옆 여백
  box-sizing: border-box;

  .swiper-slide {
    width: auto; // 카드 너비만큼만 차지하도록 설정
  }
`;

// export const SlideItem = styled(SwiperSlide)`
//   display: flex;
//   justify-content: center;
//   align-items: stretch;
// `;

function CardCarousel({ cardList }) {
  const [isGreaterPCWidth, setIsGreaterPCWidth] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // const settings = {
  //   ...paperCardSettings,

  //   afterChange(index) {
  //     setCurrentIndex(index);
  //   },
  // };
  const ListSlider = () => {
    return (
      <StyledSwiper
        freeMode={true}
        spaceBetween={20}
        slidesPerView={1.5}
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
      </StyledSwiper>
    );
  };
  // const handleSize = () => {
  //   if (window.innerWidth >= 1248) {
  //     setIsGreaterPCWidth(true);
  //   } else {
  //     setIsGreaterPCWidth(false);
  //   }
  // };

  // useEffect(() => {
  //   handleSize();
  //   window.addEventListener('resize', handleSize);

  //   return () => window.removeEventListener('resize', handleSize);
  // }, []);

  return (
    <PaperListContainer>
      {/* {isGreaterPCWidth ? (
        <PaperListSlider
          {...settings}
          prevArrow={<PrevArrow paperIndex={currentIndex} />}
          nextArrow={
            <NextArrow
              paperIndex={currentIndex}
              length={paperCardList.length}
            />
          }
        >
          {cardList.map((card) => (
            <CardFrom card={card} key={card.id} />
          ))}
        </PaperListSlider>
      ) : (
        <PaperListSlide>
          {cardList.map((card) => (
            <CardFrom card={card} key={card.id} />
          ))}
        </PaperListSlide>
      )} */}
      <ListSlider />
    </PaperListContainer>
  );
}

export default CardCarousel;

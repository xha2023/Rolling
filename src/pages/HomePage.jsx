import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { AppContext } from '../AppContext';
import Button from '../components/button/Button';
import bannerImgTop from '../assets/svg/svg_home01.svg';
import bannerImgBottom from '../assets/svg/svg_home02.svg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1200px) {
    padding: 50px 24px;
  }

  @media (max-width: 767px) {
    padding: 40px 24px;
  }
`;

export const BannerBoxBase = css`
  width: 1200px;
  height: auto;
  margin: 0 auto;
  background-color: #f6f8ff;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  padding: 60px;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 40px;
    justify-content: center;
    gap: 30px;
  }

  @media (max-width: 640px) {
    padding: 24px;
    justify-content: space-between;
  }
`;

export const BannerBox = styled.div`
  ${BannerBoxBase}

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const BannerBoxReverse = styled.div`
  ${BannerBoxBase}

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

export const BannerTextBox = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  letter-spacing: -1%;
  padding-bottom: 50px;

  @media (max-width: 1200px) {
    width: 640px;
    padding: 0;
  }

  @media (max-width: 640px) {
    width: 100%;
  }

  &.bottomTextBox {
    padding-bottom: 25px;
    margin-right: 35px;
  }
`;

export const Point = styled.span`
  width: 80px;
  height: 32px;
  background-color: #9935ff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 7px;
`;

export const BannerText = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  margin: 8px 0;
`;

export const BannerSubText = styled.span`
  color: #555555;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
`;

export const BannerImg = styled.img`
  width: 720px;
  height: 204px;
`;

const HomePage = () => {
  const { isDesktop, isTablet, isMobile } = useContext(AppContext);

  let buttonSize = 'large';

  if (isDesktop) {
    buttonSize = 'large';
  } else if (isTablet) {
    buttonSize = 'home_tablet';
  } else if (isMobile) {
    buttonSize = 'home_mobile';
  }

  return (
    <div>
      <Container>
        <BannerBox>
          <BannerTextBox>
            <Point>Point. 01</Point>
            {isDesktop ? (
              <BannerText>
                누구나 손쉽게, 온라인
                <br />
                롤링 페이퍼를 만들 수 있어요
              </BannerText>
            ) : (
              <BannerText>
                누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요
              </BannerText>
            )}
            <BannerSubText>로그인 없이 자유롭게 만들어요.</BannerSubText>
          </BannerTextBox>
          <BannerImg src={bannerImgTop} />
        </BannerBox>
        <BannerBoxReverse>
          <BannerImg src={bannerImgBottom} />
          <BannerTextBox className="bottomTextBox">
            <Point>Point. 02</Point>
            {isDesktop ? (
              <BannerText>
                서로에게 이모지로 감정을
                <br />
                표현해보세요
              </BannerText>
            ) : (
              <BannerText>서로에게 이모지로 감정을 표현해보세요</BannerText>
            )}
            <BannerSubText>
              롤링 페이퍼에 이모지를 추가할 수 있어요.
            </BannerSubText>
          </BannerTextBox>
        </BannerBoxReverse>
        <Button as={NavLink} to="/list" variant="primary" size={buttonSize}>
          구경해보기
        </Button>
      </Container>
    </div>
  );
};

export default HomePage;

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AppContext } from '../AppContext';
import bannerImgTop from '../assets/img/img_01.png';
import bannerImgBottom from '../assets/img/img_02.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const BannerBox = styled.div`
  width: 1200px;
  height: 324px;
  margin: 0 auto;
  padding: 60px;
  background-color: #f6f8ff;
  overflow: hidden;
  display: flex;
  justify-items: center;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
`;

export const BannerTextBox = styled.div`
  width: 300px;
  height: 238px;
  display: flex;
  flex-direction: column;
  letter-spacing: -1%;
`;

export const Point = styled.span`
  width: 80px;
  height: 32px;
  margin-top: 16px;
  margin-bottom: 16px;
  background-color: #9935ff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
`;

export const BannerText = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
`;
export const BannerSubText = styled.span`
  color: #555555;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  margin-top: 8px;
`;

export const BannerImg = styled.img`
  width: 640px;
  height: 162px;
`;

export const SeeButton = styled.button`
  background-color: #9935ff;
  border: 1px solid #9935ff;
  border-radius: 12px;
  padding: 14px 60px;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const HomePage = () => {
  const { isDesktop } = useContext(AppContext);

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
        <BannerBox>
          <BannerImg src={bannerImgBottom} />
          <BannerTextBox>
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
        </BannerBox>
        <SeeButton>
          <NavLink to="/list">구경해보기</NavLink>
        </SeeButton>
      </Container>
    </div>
  );
};

export default HomePage;

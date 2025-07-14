import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import logoImg from '../../assets/svg/logo.svg';
import { NavLink } from 'react-router-dom';
import { HeaderWrapper, LogoLink, HeaderButton } from './Header.styled.js';

const Header = () => {
  const { isDesktop, isTablet, isMobile, isHovered, setIsHovered } =
    useContext(AppContext);

  // const Head = styled.header`
  //   background-color: #ffffff;
  //   border-bottom: 1px solid #e9ecef;
  //   padding: ${isMobile ? '0 16px' : '0 20px'};
  //   height: 64px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
  //   position: sticky;
  //   top: 0;
  //   z-index: 1000;
  // `;

  // const CreateButtonStyle = styled.button`
  //   background-color: ${isHovered ? '#e9ecef' : '#f8f9fa'};
  //   border: 1px solid ${isHovered ? '#adb5bd' : '#dee2e6'};
  //   border-radius: 8px;
  //   padding: ${isMobile ? '8px 12px' : '10px 16px'};
  //   font-size: ${isMobile ? '13px' : '14px'};
  //   font-weight: 500;
  //   color: #495057;
  //   cursor: pointer;
  //   transition: all 0.2s ease;
  //   text-decoration: none;
  //   display: flex;
  //   align-items: center;
  //   gap: ${isMobile ? '4px' : '6px'};
  //   transform: ${isHovered ? 'translateY(-1px)' : 'translateY(0)'};
  //   outline: none;
  //   white-space: nowrap;
  // `;

  // const ButtonTextStyle = styled.span`
  //   display: ${isMobile ? 'none' : 'block'};
  // `;

  return (
    <HeaderWrapper>
      <LogoLink href="/">
        <img src={logoImg} alt="롤링 로고 이미지" />
      </LogoLink>
      <HeaderButton>롤링페이퍼 만들기</HeaderButton>
    </HeaderWrapper>
  );
};

export default Header;

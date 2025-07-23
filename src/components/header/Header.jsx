import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import logoImg from '../../assets/svg/svg_logo.svg';
import { HeaderWrapper, HeaderInner, LogoLink } from './Header.styled';
import { NavLink } from 'react-router-dom';
import Button from '../button/Button';

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <LogoLink to="/">
          <img src={logoImg} alt="Rolling Logo" />
        </LogoLink>
        <Button as={NavLink} to="/post" variant="outlined" size="compact">
          롤링 페이퍼 만들기
        </Button>
      </HeaderInner>
    </HeaderWrapper>
  );
}

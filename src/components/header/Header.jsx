import { HeaderWrapper, LogoLink, HeaderButton } from './Header.styled.js';
import logoImg from '../../assets/img/img_logo.svg';

export default function Header() {
  return (
    <HeaderWrapper>
      <LogoLink href="/">
        <img src={logoImg} alt="롤링 로고 이미지" />
      </LogoLink>
      <HeaderButton>롤링페이퍼 만들기</HeaderButton>
    </HeaderWrapper>
  );
}

import logoImg from '../../assets/img_logo.svg';

export default function Header() {
  return (
    <HeaderWrapper>
      <LogoButton>
        <img src={logoImg} alt="롤링 로고 이미지" />
      </LogoButton>
      <HeaderButton>롤링페이퍼 만들기</HeaderButton>
    </HeaderWrapper>
  );
}

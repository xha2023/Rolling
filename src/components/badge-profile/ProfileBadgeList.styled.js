import styled from 'styled-components';

export const ProfileBadgeWrapper = styled.div`
  width: 28px;
  height: 28px;
  border: 1.5px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: ${({ index }) => 100 - index};
  margin-left: ${({ index }) => (index === 0 ? 0 : -12)}px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

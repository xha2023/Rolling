import styled from 'styled-components';

export const ProfileBadgeWrapper = styled.div`
  width: 55px;
  height: 55px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 50%;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

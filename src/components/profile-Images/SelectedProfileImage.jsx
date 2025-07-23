import styled from 'styled-components';
import avatar from '../../assets/icon/avatar.svg';

function SelectedProfileImage({ handleInitImage, profileImage }) {
  const imageSource = profileImage || avatar;
  return (
    <ProfileImageContainer
      $size="28px"
      $position="static"
      onClick={handleInitImage}
    >
      <Image src={imageSource} alt="아바타" />
    </ProfileImageContainer>
  );
}

export default SelectedProfileImage;

export const ProfileImageContainer = styled.div`
  display: flex;
  width: ${({ $size }) => $size || '4px'};
  height: ${({ $size }) => $size || '4px'};
  z-index: ${({ $order }) => $order};
  position: ${({ $position }) => $position || 'absolute'};
  left: ${({ $order }) => `${$order * 16}px`};
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  border: 0.1rem solid var(--gray-200, #eee);
  cursor: pointer;

  @media (min-width: 768px) {
    width: ${({ $size }) => $size || '5.6rem'};
    height: ${({ $size }) => $size || '5.6rem'};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100px;
`;

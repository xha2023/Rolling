import styled from 'styled-components';
import avatar from '../../assets/icon/avatar.svg';

function ProfileImage({ profileImage, size, order, position, handleSelect }) {
  const imageSource = profileImage || avatar;

  return (
    <ProfileImageContainer
      $size={size}
      $order={order}
      $position={position}
      onClick={() => {
        handleSelect({ imageSource });
      }}
    >
      <Image src={imageSource} alt="아바타" />
    </ProfileImageContainer>
  );
}

export default ProfileImage;

export const ProfileImageContainer = styled.div`
  display: flex;
  width: ${({ $size }) => $size || '28px'};
  height: ${({ $size }) => $size || '28px'};
  z-index: ${({ $order }) => $order};
  position: ${({ $position }) => $position || 'absolute'};
  left: ${({ $order }) => `${$order * 16}px`};
  align-items: center;
  flex-shrink: 0;
  border-radius: 50px;
  border: 1.5px solid #eee;
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
  border-radius: 50px;
`;

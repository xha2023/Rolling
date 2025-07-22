import { ProfileBadgeWrapper } from './ProfileBadgeList.styled.js';

export default function ProfileBadgeList({ imageUrl, alt = '프로필 이미지' }) {
  return (
    <ProfileBadgeWrapper>
      <img src={imageUrl} alt={alt} />
    </ProfileBadgeWrapper>
  );
}

import { ProfileBadgeWrapper } from './ProfileBadge.styled.js';
import profileImage from '../../assets/svg/svg_profile_bg1.svg';

export default function ProfileBadge() {
  return (
    <ProfileBadgeWrapper>
      <img src={profileImage} alt="프로필 이미지" />
    </ProfileBadgeWrapper>
  );
}

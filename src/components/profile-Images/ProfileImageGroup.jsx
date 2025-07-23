import styled from 'styled-components';
import ProfileImage, { ProfileImageContainer } from './ProfileImage';

const PROFILE_SIZE = '30px';

function ProfileImageGroup({ profileImages, messageCount = 0 }) {
  const lastOrder = profileImages.length;

  return (
    <ProfileImageGroupDiv>
      <ProfileImageGroupContainer>
        {lastOrder !== 0 &&
          profileImages.map((image, index) => (
            <ProfileImage
              profileImage={image}
              size={PROFILE_SIZE}
              order={index}
              key={index}
            />
          ))}
        <ProfileImageCounter $size={PROFILE_SIZE} $order={lastOrder}>
          <ProfileCount>+{messageCount}</ProfileCount>
        </ProfileImageCounter>
      </ProfileImageGroupContainer>
    </ProfileImageGroupDiv>
  );
}

export default ProfileImageGroup;

const ProfileImageGroupDiv = styled.div`
  width: 122px; /* 7.6rem × 16 */
  height: 28px; /* 3rem × 16 */
`;

const ProfileImageGroupContainer = styled.div`
  position: relative;
`;

const ProfileImageCounter = styled(ProfileImageContainer)`
  background: #fff;
  justify-content: center;
`;

const ProfileCount = styled.h4`
  color: #555555;
  font-size: 12px; /* 1.2rem × 16 */
  font-weight: 400;
  line-height: 18px; /* 1.8rem × 16 */
  margin-bottom: 0;
`;

import { useState } from 'react';
// import defaultProfileImage from '../../assets/svg/default_profile.svg';
import {
  CircleImageButton,
  SelectedImage,
  ImageContainer,
  TextAndImageContainer,
  SelectorWrapper,
} from './ImageSlector.styled';

// Call data
// const profileImageData = {
//   imageUrls: [
//     'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png',
//     'https://picsum.photos/id/522/100/100',
//     'https://picsum.photos/id/547/100/100',
//     'https://picsum.photos/id/268/100/100',
//     'https://picsum.photos/id/1082/100/100',
//     'https://picsum.photos/id/571/100/100',
//     'https://picsum.photos/id/494/100/100',
//     'https://picsum.photos/id/859/100/100',
//     'https://picsum.photos/id/437/100/100',
//     'https://picsum.photos/id/1064/100/100',
//   ],
// };
// const profileImages = profileImageData.imageUrls;

// Component
const ImageSelector = ({ profileImages, selectedImage, onImageSelect }) => {
  // 2. state 초기값을 설정할 때 객체 내부의 배열에 접근
  //   const [selectedImage, setSelectedImage] = useState(defaultProfileImage);

  //   const handleClick = (imageUrl) => {
  //     setSelectedImage(imageUrl);
  //   };

  return (
    <SelectorWrapper>
      <SelectedImage src={selectedImage} alt="선택된 프로필" />
      <TextAndImageContainer>
        프로필 이미지를 선택해주세요!
        {/* 3. map을 돌릴 때도 객체 내부의 배열을 사용 */}
        <ImageContainer>
          {profileImages.map((image) => (
            <CircleImageButton
              key={image}
              className="image-button"
              onClick={() => onImageSelect(image)}
            >
              <img src={image} alt="프로필 사진" />
            </CircleImageButton>
          ))}
        </ImageContainer>
      </TextAndImageContainer>
    </SelectorWrapper>
  );
};

export default ImageSelector;

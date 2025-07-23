import { useState } from 'react';
// import defaultProfileImage from '../../assets/svg/default_profile.svg';
import {
  CircleImageButton,
  SelectedImage,
  ImageContainer,
  TextAndImageContainer,
  SelectorWrapper,
  SelectedImageContainer,
} from './ImageSlector.styled';

const ImageSelector = ({ profileImages, selectedImage, onImageSelect }) => {
  return (
    <SelectorWrapper>
      <SelectedImageContainer>
        <SelectedImage src={selectedImage} alt="선택된 프로필" />
      </SelectedImageContainer>
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

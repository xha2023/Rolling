//library
import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

//components
import Input from '../components/input/Input';
import Select from '../components/dropdown/Select';
import Button from '../components/button/Button';
import ImageSelector from '../components/image-selector/ImageSelector';
import Editor from '../components/editor/Editor';

//api
import { createMessage } from '../api/messages';
import { ProfileImage } from '../components/card/MessageCard.styled';
// import { getProfileImages } from '../api/images'; // ✅ 프로필 이미지 목록

//data
const relationOptions = [
  { value: '친구', label: '친구' },
  { value: '지인', label: '지인' },
  { value: '동료', label: '동료' },
  { value: '가족', label: '가족' },
];

const fontOptions = [
  { value: 'Noto Sans', label: 'Noto Sans' },
  { value: 'Pretendard', label: 'Pretendard' },
  { value: '나눔명조', label: '나눔명조' },
  { value: '나눔손글씨 손편지체', label: '나눔손글씨 손편지체' },
];

const profileImageData = {
  imageUrls: [
    'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png',
    'https://picsum.photos/id/522/100/100',
    'https://picsum.photos/id/547/100/100',
    'https://picsum.photos/id/268/100/100',
    'https://picsum.photos/id/1082/100/100',
    'https://picsum.photos/id/571/100/100',
    'https://picsum.photos/id/494/100/100',
    'https://picsum.photos/id/859/100/100',
    'https://picsum.photos/id/437/100/100',
    'https://picsum.photos/id/1064/100/100',
  ],
};

const profileImages = profileImageData.imageUrls;

export default function SendPaperPage() {
  const [name, setName] = useState('');
  const [relation, setRelation] = useState(relationOptions[1]);
  const [font, setFont] = useState(fontOptions[0]);
  const [editorContent, setEditorContent] = useState('<p></p>');
  const [selectedImage, setSelectedImage] = useState(profileImages[0]);

  const { id: recipientId } = useParams();

  const theme = useTheme();
  const navigate = useNavigate();

  const handleImageSelect = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleSubmit = async () => {
    try {
      await createMessage(recipientId, {
        sender: name,
        relationship: relation.value,
        font: font.value,
        content: editorContent,
        profileImageURL: selectedImage,
      });
      navigate(`/post/${recipientId}`);
      alert('메시지가 성공적으로 전송되었습니다!');
    } catch (error) {
      alert('메시지 전송 실패: ' + error.message);
    }
  };

  const isEditorEmpty = (content) => {
    if (!content) return true;
    const textContent = content.replace(/<[^>]*>/g, '').trim();
    return textContent === '';
  };

  const isEmpty = name.trim() === '' || isEditorEmpty(editorContent);

  return (
    <Container>
      <Label>From.</Label>
      <Input
        placeholder="이름을 입력해 주세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Label>프로필 이미지</Label>
      <ImageSelector
        profileImages={profileImages}
        selectedImage={selectedImage}
        onImageSelect={handleImageSelect}
      />
      <Label>상대와의 관계</Label>
      <Select
        options={relationOptions}
        value={relation}
        onChange={setRelation}
      />
      <Label>내용을 입력해 주세요</Label>
      <Editor content={editorContent} onContentChange={setEditorContent} />

      <Label>폰트 선택</Label>
      <Select options={fontOptions} value={font} onChange={setFont} />
      <Button onClick={handleSubmit} disabled={isEmpty}>
        생성하기
      </Button>
    </Container>
  );
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Label = styled.label`
  ${({ theme }) => theme.textStyles.font16Bold};
`;

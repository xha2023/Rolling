import React from 'react';
import { useState } from 'react';
import BackgroundSelector from '../components/color-chip/BackgroundSelector';
import InputText from '../components/input/Input';
import Button from '../components/button/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createRecipient } from '../api/recipients';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 57px auto;
  /* max-width: 720px; */
  /* margin: 57px auto 0; */
  @media (min-width: 320px) {
    margin: 57px 24px;
  }

  @media (min-width: 768px) {
    width: 720px;
    margin: 57px auto;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin: 55px 0 15px;
  font-size: 24px;
  font-weight: 700;
`;

const LabelInfo = styled.h4`
  font-weight: 400;
  margin-bottom: 30px;
`;

const ButtonBox = styled.div`
  @media (min-width: 320px) {
    margin-top: 336px;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const MakePersonalPage = () => {
  const [recipientName, setRecipientName] = useState('');
  const [selectedColor, setSelectedColor] = useState({
    backgroundType: 'color',
    value: 'beige',
  });
  const navigate = useNavigate();

  const handleCreate = async () => {
    if (!recipientName) {
      alert('값을 입력해주세요');
      return;
    }

    console.log('생성 시작 - selectedColor:', selectedColor);

    const payload = {
      team: '17-1',
      name: recipientName,
    };

    // 배경 설정 - 이미지든 색상이든 항상 backgroundColor도 포함
    if (selectedColor.backgroundType === 'color') {
      payload.backgroundColor = selectedColor.value;
    } else {
      // 이미지 선택 시에도 기본 backgroundColor 포함
      payload.backgroundImageURL = selectedColor.value;
      payload.backgroundColor = 'beige'; // 기본값 설정
    }

    console.log('API 호출 payload:', payload);

    try {
      const result = await createRecipient(payload);
      const id = result.id;
      console.log('생성됨:', result);
      navigate(`/post/${id}`);
    } catch (error) {
      console.error('에러 발생:', error);
      alert('생성에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <PageWrapper>
      <Title>To.</Title>
      <InputText
        placeholder="받는 사람 이름을 입력해 주세요."
        errormsg="값을 입력해 주세요."
        inputvalue={recipientName}
        onInputChange={(e) => setRecipientName(e.target.value)}
        style={{ width: '100%' }}
      />
      <Label>배경화면을 선택해 주세요.</Label>
      <LabelInfo>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</LabelInfo>
      <BackgroundSelector
        selectedColor={selectedColor}
        onChangeColor={setSelectedColor}
      />
      <ButtonBox>
        <Button
          variant="primary"
          size="large"
          onClick={handleCreate}
          disabled={!recipientName.trim()}
          style={{ width: '100%', marginTop: '20px' }}
        >
          생성하기
        </Button>
      </ButtonBox>
    </PageWrapper>
  );
};

export default MakePersonalPage;

import React from 'react';
import { useState } from 'react';
import BackgroundSelector from '../components/color-chip/BackgroundSelector';
import InputText from '../components/input/Input';
import Button from '../components/button/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PageWrapper = styled.div`
  max-width: 720px;
  margin: 57px auto 0;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin: 55px auto 15px;
  font-size: 24px;
  font-weight: 700;
`;

const LabelInfo = styled.h4`
  font-weight: 400;
  margin-bottom: 30px;
`;

const MakePersonalPage = () => {
  const [recipientName, setRecipientName] = useState('');
  const [selectedColor, setSelectedColor] = useState('yellow');
  const navigate = useNavigate();

  const handleCreate = () => {
    if (!recipientName) {
      alert('받는 사람 이름을 입력해주세요.');
      return;
    }

    const id = '1234abcd';

    console.log('생성:', { recipientName, selectedColor });

    navigate(`/post/${id}`);
  };

  return (
    <PageWrapper>
      <Title>To.</Title>
      <InputText
        placeholder="ex) 김롤링"
        errormsg="받는 사람 이름을 입력해 주세요"
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

      <Button
        variant="primary"
        size="large"
        onClick={handleCreate}
        style={{ width: '100%', marginTop: '20px', fontSize: '18px' }}
      >
        생성하기
      </Button>
    </PageWrapper>
  );
};

export default MakePersonalPage;

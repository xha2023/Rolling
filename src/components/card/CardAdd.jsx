import React from 'react';
import styled from 'styled-components';
import plusImg from '../../assets/svg/plus.svg';

const CardContainer = styled.div`
  width: 384px;
  height: 280px;
  padding: 40px;
  /* background: linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%); */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
`;

const ImageBox = styled.div`
  width: 56px;
  height: 56px;

  img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }
`;

const AddCard = () => {
  return (
    <CardContainer>
      <ImageBox>
        <img src={plusImg} alt="plus icon" />
      </ImageBox>
    </CardContainer>
  );
};

export default AddCard;

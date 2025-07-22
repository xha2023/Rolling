import React from 'react';
import styled from 'styled-components';
import plusImg from '../../assets/svg/plus.svg';

const CardContainer = styled.div`
  width: 384px;
  height: 280px;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: #f8f9fa;
  border: 2px dashed #ddd;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
    border-color: #9935ff;
    background-color: #f5f0ff;
  }

  @media (max-width: 1248px) {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 280px;
    padding: 24px;
  }
`;

const ImageBox = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    opacity: 0.7;
    transition: opacity 0.2s ease;
  }

  ${CardContainer}:hover & img {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

const AddCard = ({ onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <ImageBox>
        <img src={plusImg} alt="plus icon" />
      </ImageBox>
    </CardContainer>
  );
};

export default AddCard;

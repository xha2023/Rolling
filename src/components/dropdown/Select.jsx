import React, { useState } from 'react';
import styled from 'styled-components';
import { useDropdown } from './useDropdown';
import * as S from './Select.styled.js';
import arrowIcon from '../../assets/icon/ic_arrow_down.svg';
// import Input from '../input/Input'; //인풋 불러오기

const MockInput = styled.div`
  padding: 10px 12px;
  border: 1px solid #ccc;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  box-sizing: border-box;
  border-radius: 8px;
`;

const Select = ({ options, placeholder, onChange, width }) => {
  const { isOpen, toggle, close, dropdownRef } = useDropdown();
  const [selectedOption, setSelectedOption] = useState(() => {
    return options && options.length > 0 ? options[0] : null;
  });

  const handleSelect = (option) => {
    setSelectedOption(option);
    if (onChange) onChange(option); // 부모에게 선택된 값 전달
    close();
  };

  const displayText = selectedOption ? selectedOption.label : placeholder;

  return (
    <S.Wrapper width={width} ref={dropdownRef}>
      <MockInput
        aria-expanded={isOpen}
        onClick={toggle}
        style={{ cursor: 'pointer' }}
      >
        {displayText}
        <img src={arrowIcon} alt="드롭다운 아이콘" />
      </MockInput>

      {isOpen && (
        <S.List>
          {options.map((option) => (
            <S.Item key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </S.Item>
          ))}
        </S.List>
      )}
    </S.Wrapper>
  );
};

export default Select;

import React from 'react';
import styled from 'styled-components';
import * as S from './Menu.styled';
import { useDropdown } from './useDropdown';
// import Button from '../button/Button'; // 버튼 컴포넌트 불러오기

// --- 임시 버튼 컴포넌트 ---
const MockButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
`;
// -------------------------

const Menu = ({ triggerText, items }) => {
  const { isOpen, toggle, dropdownRef } = useDropdown();

  return (
    <S.Wrapper ref={dropdownRef}>
      <MockButton onClick={toggle} aria-expanded={isOpen}>
        {triggerText}
      </MockButton>

      {isOpen && (
        <S.List width="140px">
          {items.map((item, index) => (
            <S.Item
              key={index}
              onClick={() => {
                item.handler(); // 각 아이템의 핸들러 함수 실행
                toggle();
              }}
            >
              {item.label}
            </S.Item>
          ))}
        </S.List>
      )}
    </S.Wrapper>
  );
};

export default Menu;

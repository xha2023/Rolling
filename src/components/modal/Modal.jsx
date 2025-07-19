import React from 'react';
import ReactDOM from 'react-dom';
import * as S from './Modal.styled.js'; // 스타일 파일 import

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  // Portal을 사용하여 모달 렌더링
  return ReactDOM.createPortal(
    <S.ModalOverlay onClick={onClose}>
      <S.ModalWrapper onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
        {children}
      </S.ModalWrapper>
    </S.ModalOverlay>,
    document.getElementById('modal-root'),
  );
};

export default Modal;

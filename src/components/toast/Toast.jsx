import { useEffect } from 'react';
import styled from 'styled-components';
import completedIcon from '../../assets/icon/ic_completed.svg';
import closeIcon from '../../assets/icon/ic_close.svg';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <ToastBox>
      <img src={completedIcon} alt="완료 아이콘" />
      <Message>{message}</Message>
      <CloseIcon src={closeIcon} alt="닫기 아이콘" onClick={onClose} />
    </ToastBox>
  );
}

const ToastBox = styled.div`
  width: 524px;
  height: 62px;
  position: fixed;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff3e0;
  padding: 14px 20px;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 9999;
  animation: fadeInOut 5s ease-in-out;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translate(-50%, 0);
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @media (max-width: 360px) {
    width: 320px;
    height: 64px;
  }
`;

const Message = styled.span`
  flex: 1; /* 메시지가 남은 공간 다 차지하게 */
  word-break: keep-all;
`;

const CloseIcon = styled.img`
  cursor: pointer;
`;

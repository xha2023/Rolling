import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const ToText = styled.span`
  ${({ theme }) => theme.textStyles.font16Bold};
  color: ${({ theme }) => theme.colors.black};
`;

export const Avatars = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const AvatarImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.white};
  margin-left: -8px;

  &:first-child {
    margin-left: 0;
  }
`;

export const MoreWriters = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-left: -8px;
`;

export const WritersText = styled.span`
  ${({ theme }) => theme.textStyles.font14Regular};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ReactionBox = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 20px;
  padding: 6px 12px;
  gap: 6px;
  position: relative;
`;

export const Reaction = styled.div`
  ${({ theme }) => theme.textStyles.font14Regular};
  background-color: #0000008a;
  color: white;
  border-radius: 20px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const DropdownIcon = styled.div`
  font-size: 10px;
  margin-left: 4px;
  color: ${({ theme }) => theme.colors.gray[600]};
  cursor: pointer;
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  z-index: 100;
`;

export const DropdownReaction = styled.div`
  background-color: #0000008a;
  color: white;
  padding: 4px 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 4px;
  ${({ theme }) => theme.textStyles.font14Regular};
`;

export const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  padding: 6px 12px;
  ${({ theme }) => theme.textStyles.font14Bold};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const ShareButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  padding: 6px 12px;
  ${({ theme }) => theme.textStyles.font14Bold};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const ShareDropdown = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 100;
`;

export const ShareOption = styled.button`
  background: none;
  border: none;
  padding: 6px 12px;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[800]};
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const ToastMessage = styled.div`
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: fadeInOut 3s ease-in-out;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
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
`;

import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border: none;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  // 기본 사이즈
  padding: 0.5rem 1.2rem;
  height: 44px;

  // 사이즈별 스타일
  ${({ $size, theme }) =>
    $size === 'small' &&
    css`
      padding: 0.3rem 0.8rem;
      font-size: ${theme.fontSizes.xs};
      height: 36px;
    `}

  ${({ $size, theme }) =>
    $size === 'medium' &&
    css`
      padding: 0.5rem 1.2rem;
      font-size: ${theme.fontSizes.sm};
      height: 44px;
    `}

  ${({ $size, theme }) =>
    $size === 'large' &&
    css`
      padding: 0.75rem 1.5rem;
      font-size: ${theme.fontSizes.md};
      height: 56px;
    `}

  // variant별 스타일
  ${({ $variant, theme }) =>
    $variant === 'primary' &&
    css`
      background-color: ${theme.colors.primary[500]};
      color: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.primary[800]};
      }

      &:active {
        background-color: ${theme.colors.primary[700]};
      }

      &:disabled {
        background-color: ${theme.colors.gray[300]};
        cursor: not-allowed;
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'outlined' &&
    css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      border: 1px solid ${theme.colors.gray[300]};

      &:hover {
        background-color: ${theme.colors.gray[100]};
      }

      &:active {
        background-color: ${theme.colors.gray[200]};
      }

      &:disabled {
        background-color: ${theme.colors.gray[300]};
        color: ${theme.colors.gray[400]};
        cursor: not-allowed;
      }
    `}

  ${({ $variant, theme }) =>
    ($variant === 'icon' || $variant === 'arrow') &&
    css`
      width: 40px;
      height: 40px;
      padding: 0;
      border-radius: 50%;
      background-color: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.gray[100]};
      }

      &:active {
        background-color: ${theme.colors.gray[200]};
      }

      &:disabled {
        background-color: ${theme.colors.gray[300]};
        cursor: not-allowed;
      }
    `}

  ${({ $variant, theme, $isSelected }) =>
    $variant === 'toggle' &&
    css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      border: 1px solid ${theme.colors.gray[300]};

      &:hover {
        background-color: ${theme.colors.gray[100]};
      }

      &:active {
        background-color: ${theme.colors.gray[200]};
      }

      &:disabled {
        background-color: ${theme.colors.gray[300]};
        color: ${theme.colors.gray[400]};
        cursor: not-allowed;
      }

      ${$isSelected &&
      css`
        color: ${theme.colors.primary[500]};
        border: 1px solid ${theme.colors.primary[500]};
        font-weight: ${({ theme }) => theme.fontWeights.bold};
      `}
    `}
`;

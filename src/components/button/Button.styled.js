import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
    $size === 'large' &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.lg};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      height: 56px;
      min-width: 280px;
    `}

  ${({ $size, theme }) =>
    $size === 'compact' &&
    css`
      padding: 0.6rem 1.2rem;
      font: ${theme.fonts.font16Regular};
      height: 40px;
      min-width: 122px;
    `}

  ${({ $size, theme }) =>
    $size === 'small' &&
    css`
      padding: 0.4rem 1rem;
      font: ${theme.fonts.font16Medium};
      height: 36px;
      min-width: 122px;
    `}

  ${({ $size, theme }) =>
    $size === 'xsmall' &&
    css`
      padding: 0.3rem 0.9rem;
      font: ${theme.fonts.font14Regular};
      height: 28px;
      min-width: 122px;
    `}

    ${({ $size, theme }) =>
    $size === 'home_tablet' &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.lg};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      height: 56px;
      min-width: 720px;
    `}

    ${({ $size, theme }) =>
    $size === 'home_mobile' &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.lg};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      height: 56px;
      min-width: 320px;
    `}

  // variant별 스타일
  ${({ $variant, theme }) =>
    $variant === 'primary' &&
    css`
      background-color: ${theme.colors.primary[500]};
      color: ${theme.colors.white};
      border-radius: 12px;

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
      border-radius: 8px;

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

  ${({ $variant, theme, $isSelected, $position }) =>
    $variant === 'toggle' &&
    css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      border-radius: 8px;

      ${$isSelected &&
      css`
        color: ${theme.colors.primary[500]};
        border: 2px solid ${theme.colors.primary[500]};
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        font-size: 16px;
        background-color: ${theme.colors.white};
      `}

      ${!$isSelected &&
      css`
        background-color: ${theme.colors.gray[100]};
        border: none;
        font-weight: ${({ theme }) => theme.fontWeights.regular};
        font-size: 16px;

        ${$position === 'left' &&
        css`
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        `}

        ${$position === 'right' &&
        css`
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        `}
      `}
    `}
`;

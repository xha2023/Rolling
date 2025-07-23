import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({
  children,
  icon,
  onClick,
  variant = 'primary',
  disabled = false,
  isSelected = false,
  size = 'compact',
  type = 'button',
  ...rest
}) => {
  return (
    <StyledButton
      onClick={onClick}
      $variant={variant}
      $size={size}
      disabled={disabled}
      $isSelected={isSelected}
      type={type}
      {...rest}
    >
      {icon ? icon : children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'outlined', 'icon', 'arrow', 'toggle']),
  disabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  size: PropTypes.oneOf(['xsmall', 'small', 'compact', 'large']),
  type: PropTypes.string,
};

export default Button;

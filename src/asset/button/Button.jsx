import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import "../../asset/font/pretendardvariable.css";

const Button = forwardRef(
  (
    {
      className,
      type = 'button',
      variant = 'default',
      size = 'default',
      fullWidth = false,
      rounded = false,
      href,
      ...props
    },
    ref
  ) => {
    const StyledComponent = href ? StLink : StButton;
    const buttonProps = href ? { to: href, ...props } : { type, ...props };

    return (
      <StyledComponent
        ref={ref}
        className={className}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        $rounded={rounded}
        {...buttonProps}
      />
    );
  }
);

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 18px;
  font-size: 22px;
  font-family: 'Pretendard';
  font-weight: 600;
  color: #5A6AFB; 
  border: 2px solid #8b97ff;
  transition: 0.15s ease-in-out;
`;

const variantStyles = {
  default: css`
    background-color: var(--color-secondary);
    color: #5A6AFB; 
    border: 2px solid #8b97ff;
    font-weight: bold;
    &:hover {
      background-color: #dadeff;
    }
  `,
  fill: css`
      background-color: #5A6AFB;
      border: none;
    color: #ffffff;
    &:hover {
      background-color: #4956cb;

    }
  `,
  choice: css`
  background-color: #ffffff;
    height: 64px;
    color: #5A6AFB; 
    padding-left: 40px; 
    display: flex;
    justify-content: flex-start;
    text-align: left;
    &:hover {
      background-color: #dadeff;

    }
    margin: 6px 0;
  `
};

const sizeStyles = {
  default: css`
    height: 70px;
    width: 520px;
    padding: 10px 24px;
  `
};

const StButton = styled.button`
  ${baseStyles}
  ${(props) => variantStyles[props.$variant] || variantStyles.default}
  ${(props) => sizeStyles[props.$size] || sizeStyles.default}
  ${(props) => props.$fullWidth && 'width: 100%;'}
  ${(props) => props.$rounded && 'border-radius: 25px;'}
`;

const StLink = styled(Link)`
  ${baseStyles}
  ${(props) => variantStyles[props.$variant] || variantStyles.default}
  ${(props) => sizeStyles[props.$size] || sizeStyles.default}
  ${(props) => props.$fullWidth && 'width: 100%;'}
  ${(props) => props.$rounded && 'border-radius: 25px;'}
`;

Button.displayName = 'Button';

export { Button };

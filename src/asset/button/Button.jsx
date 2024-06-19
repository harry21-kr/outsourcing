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
  font-size: 24px;
  font-family: 'Pretendard';
  font-weight: 600;
  color: #5A6AFB; /* 글자 색상 변경 */
  border: 2px solid #8b97ff;
  transition: 0.15s ease-in-out;
`;

const variantStyles = {
  default: css`
    background-color: var(--color-secondary);
    color: #5A6AFB; /* 글자 색상 변경 */
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
  `
};

const sizeStyles = {
  default: css`
    height: 76px;
    width: 520px;
    padding: 10px 24px;
  `,
  medium: css`
    height: 48px;
    padding: 12px 24px;
    font-size: 15px;
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

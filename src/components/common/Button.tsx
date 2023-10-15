"use client";

import { CSSProperties, ComponentPropsWithRef } from "react";
import styled from "styled-components";

type Props = {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  bgColor?: CSSProperties["backgroundColor"];
  hoverBgColor?: CSSProperties["backgroundColor"];
  disableBgColor?: CSSProperties["backgroundColor"];
  padding?: CSSProperties["padding"];
} & ComponentPropsWithRef<"button">;

const Container = styled.button<{
  $padding: Props["padding"];
  $width: Props["width"];
  $height: Props["height"];
  $bgColor: Props["bgColor"];
  $hoverBgColor: Props["hoverBgColor"];
  $disableBgColor: Props["disableBgColor"];
}>`
  padding: ${({ $padding }) => $padding};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const Button = ({
  className,
  children,
  disabled,
  width = "auto",
  height = "auto",
  padding = "4px 8px",
  bgColor = "transparent",
  hoverBgColor = "transparent",
  disableBgColor = "transparent",
  onClick,
}: Props) => {
  return (
    <Container
      className={className}
      disabled={disabled}
      onClick={onClick}
      $width={width}
      $height={height}
      $padding={padding}
      $bgColor={bgColor}
      $hoverBgColor={hoverBgColor}
      $disableBgColor={disableBgColor}
    >
      {children}
    </Container>
  );
};

export default Button;

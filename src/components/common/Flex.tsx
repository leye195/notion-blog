"use client";

import styled from "styled-components";

import { type ComponentProps } from "react";
import { type Flex } from "@/styles/mixin";

type Props = Flex & ComponentProps<"div">;

const StyledDiv = styled.div<Flex>`
  display: ${({ $display }) => $display ?? "flex"};
  align-items: ${({ $alignItems }) => $alignItems ?? "flex-start"};
  justify-content: ${({ $justifyContent }) => $justifyContent ?? "flex-start"};
  flex-direction: ${({ $direction }) => $direction ?? "row"};
`;

const Flex = ({ children, ...restProps }: Props) => (
  <StyledDiv {...restProps}>{children}</StyledDiv>
);

export default Flex;

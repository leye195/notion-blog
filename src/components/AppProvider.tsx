"use client";

import { ComponentProps } from "react";
import StyledComponentsRegistry from "@/libs/registry";
import GlobalStyle from "@/styles/global";

const AppProvider = ({ children }: ComponentProps<"div">) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      {children}
    </StyledComponentsRegistry>
  );
};

export default AppProvider;

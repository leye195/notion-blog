"use client";

import { ComponentProps } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StyledComponentsRegistry from "@/libs/registry";
import GlobalStyle from "@/styles/global";

const queryClient = new QueryClient();

const AppProvider = ({ children }: ComponentProps<"div">) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <GlobalStyle />
        {children}
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
};

export default AppProvider;

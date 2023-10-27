"use client";

import { useRouter } from "next/navigation";
import { ComponentProps } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { KBarProvider } from "kbar";
import StyledComponentsRegistry from "@/libs/registry";
import { generateKBarAction } from "@/libs/kbarActions";
import GlobalStyle from "@/styles/global";
import KBarComponent from "@/components/KBarComponent";

const queryClient = new QueryClient();

const AppProvider = ({ children }: ComponentProps<"div">) => {
  const router = useRouter();
  const kbarActions = generateKBarAction(router);

  return (
    <KBarProvider actions={kbarActions}>
      <QueryClientProvider client={queryClient}>
        <StyledComponentsRegistry>
          <KBarComponent />
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </QueryClientProvider>
    </KBarProvider>
  );
};

export default AppProvider;

"use client";

import { useRouter } from "next/navigation";
import { ComponentProps, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Action, KBarProvider, useKBar, useRegisterActions } from "kbar";
import useMounted from "@/hooks/useMounted";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import StyledComponentsRegistry from "@/libs/registry";
import { generateKBarAction } from "@/libs/kbarActions";
import { type notionDBRowStructed as Post } from "@/types/notion";
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
          <HandleActionWithRoute />
          <KBarComponent />

          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </QueryClientProvider>
    </KBarProvider>
  );
};

function HandleActionWithRoute() {
  const [actions, setActions] = useState<Action[]>([]);
  const isMounted = useMounted();
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    if (isMounted) {
      (async () => {
        const res = await fetch("http://localhost:3000/api/posts");
        const posts = await res.json();
        const postActions = posts.map(({ id, name, date }: Post) => ({
          id,
          name,
          subtitle: date,
          parent: "posts",
          perform: () => router.push(`/posts/${id}`),
        }));
        setActions([
          {
            id: "posts",
            name: "Posts",
            section: "Scope",
            keywords: "post, article",
            perform: () => router.push("/posts"),
          },
          ...postActions,
        ]);
      })();
    }
  }, [isMounted]);

  useRegisterActions(actions, [actions]);

  return <></>;
}

export default AppProvider;

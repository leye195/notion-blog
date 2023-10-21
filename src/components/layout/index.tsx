"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Flex from "@/components/common/Flex";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Flex className="w-full min-h-[100vh]" $direction="column">
      <Header />
      <main className="w-full max-w-[1600px] min-h-[calc(100vh-64px)] mx-auto pt-[64px] ">
        {children}
      </main>
      <Footer />
    </Flex>
  );
};

export default Layout;

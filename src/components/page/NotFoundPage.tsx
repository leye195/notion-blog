"use client";

import { paletteColor } from "@/styles/variable";
import Button from "../common/Button";
import Flex from "../common/Flex";

const NotFoundPage = () => {
  return (
    <Flex
      className="min-h-[calc(100vh-300px)]"
      $direction="column"
      $justifyContent="center"
      $alignItems="center"
      $gap="20px"
    >
      <h1 className="lg:text-8xl text-6xl my-0">
        <b>404</b>
      </h1>

      <p className="lg:text-3xl text-2xl">This page could not be found.</p>
      <Button
        className="lg:text-xl text-lg"
        padding="8px 12px"
        bgColor={paletteColor.dgray400}
        hoverBgColor={paletteColor.dgray400}
        color={paletteColor.white}
        borderRadius="8px"
      >
        Return to Home
      </Button>
    </Flex>
  );
};

export default NotFoundPage;

import styled from "styled-components";
import { flex } from "@/styles/mixin";
import Flex from "@/components/common/Flex";
import { Email, GitHub, RSS } from "@/components/icon";

const Container = styled.footer`
  ${flex({
    $alignItems: "center",
    $justifyContent: "center",
    $direction: "column",
    $gap: "12px",
  })};
  width: inherit;
`;

const Footer = () => {
  return (
    <Container className="border-t-2 border-black-50 py-[32px] bg-gray-200 ">
      <Flex className="text-[32px]" $gap="10px">
        <a href="https://github.com/leye195" target="_blank" rel="noopener">
          <GitHub />
        </a>
        <a href="mailto:leye195@naver.com">
          <Email />
        </a>
        <a href="/rss.xml" target="_blank" rel="noopener">
          <RSS />
        </a>
      </Flex>
      <p className="text-xl">
        © {new Date().getFullYear()} dan.dev.log, All right reserved.
      </p>
      <p className="text-lg">Built with NextJS</p>
    </Container>
  );
};

export default Footer;

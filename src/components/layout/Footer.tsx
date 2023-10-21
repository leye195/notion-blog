import { flex } from "@/styles/mixin";
import styled from "styled-components";

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
    <Container className="border-t-2 border-slate-50 py-[45px] bg-gray-200 ">
      <p className="text-xl">
        © {new Date().getFullYear()} dan.dev.log, All right reserved.
      </p>
      <p className="text-lg">Built with NextJS</p>
    </Container>
  );
};

export default Footer;

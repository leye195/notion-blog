import { flex } from "@/styles/mixin";
import styled from "styled-components";

const Container = styled.footer`
  ${flex({ alignItems: "center", justifyContent: "center" })};
  padding: 1.5rem 0;
  width: inherit;
`;

const Footer = () => {
  return <Container className="border-t-2 border-slate-50">Footer</Container>;
};

export default Footer;

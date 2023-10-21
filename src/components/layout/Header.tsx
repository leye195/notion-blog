import Link from "next/link";
import styled from "styled-components";

import { flex } from "@/styles/mixin";
import { Light } from "../icon";
import Button from "../common/Button";

const Container = styled.header`
  ${flex({ $alignItems: "center" })};
  width: inherit;
  height: 4rem;
  padding: 0 1rem;
  position: fixed;
`;

const Nav = styled.nav`
  ${flex({ $alignItems: "center", $justifyContent: "space-between" })};
  max-width: 1600px;
  width: inherit;
  margin: 0 auto;

  a {
    font-size: 18px;
  }
`;

const LeftSide = styled.div``;

const RightSide = styled.div`
  ${flex({})}
  gap: 18px;
`;

const Header = () => {
  return (
    <Container className="border-b-2 border-slate-50 bg-white">
      <Nav>
        <LeftSide>
          <Link href="/">
            <b>DAN.DEV.LOG</b>
          </Link>
        </LeftSide>
        <RightSide>
          <Link href="/posts">
            <b>Posts</b>
          </Link>
          <Link href="/resume">
            <b>Resume</b>
          </Link>
          <Button>
            <Light />
          </Button>
        </RightSide>
      </Nav>
    </Container>
  );
};

export default Header;

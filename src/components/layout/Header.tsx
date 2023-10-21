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
  z-index: 1;
`;

const Nav = styled.nav`
  ${flex({ $alignItems: "center", $justifyContent: "space-between" })};
  max-width: 1600px;
  width: inherit;
  margin: 0 auto;

  a {
    font-size: 18px;
  }

  .right-side {
    ${flex({ $alignItems: "center" })}
    gap: 10px;
  }
`;

const Header = () => {
  return (
    <Container className="border-b-2 border-black-50 bg-white">
      <Nav>
        <div className="left-side">
          <Link href="/">
            <b>DAN.DEV.LOG</b>
          </Link>
        </div>
        <div className="right-side">
          <Link href="/posts">
            <b>Posts</b>
          </Link>
          <Link href="/resume">
            <b>Resume</b>
          </Link>
          <Button>
            <Light />
          </Button>
        </div>
      </Nav>
    </Container>
  );
};

export default Header;

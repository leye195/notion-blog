import Link from "next/link";
import styled from "styled-components";

import { flex } from "@/styles/mixin";
import KBarToggleButton from "@/components/kbar/KBarToggleButton";

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
          <KBarToggleButton />
        </div>
      </Nav>
    </Container>
  );
};

export default Header;

import { flex } from "@/styles/mixin";
import styled from "styled-components";
import { Light } from "../icon";
import Button from "../common/Button";
import Link from "next/link";
import breakpoints from "@/styles/breakpoints";

const Container = styled.header`
  ${flex({ alignItems: "center" })};
  width: inherit;
  height: 4rem;
  padding: 0 1rem;
`;

const Nav = styled.nav`
  ${flex({ alignItems: "center", justifyContent: "space-between" })};
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
    <Container className="border-b-2 border-slate-50">
      <Nav>
        <LeftSide>
          <Link href="/">
            <b>DAN.DEV.LOG</b>
          </Link>
        </LeftSide>
        <RightSide>
          <Link href="/about">
            <b>About</b>
          </Link>
          <Link href="/tags">
            <b>Tags</b>
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

import { flex } from "@/styles/mixin";
import { paletteColor } from "@/styles/variable";
import { KBarResults, useMatches } from "kbar";
import styled from "styled-components";

const ItemWrapper = styled.div<{ active: boolean }>`
  ${flex({ $alignItems: "center" })};
  position: relative;
  width: 100%;
  padding: 4px 16px;
  cursor: pointer;
  opacity: ${({ active }) => (active ? 0.8 : 1)};
  transition: background-color 0.2s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${paletteColor.white50};
    transform: scaleX(${({ active }) => (active ? "100%" : "0")});
    transform-origin: left;
    transition: transform 0.2s;
  }
`;

const TitleWrapper = styled.div`
  ${flex({ $direction: "column", $justifyContent: "center" })}
  width: inherit;
  height: 2.5rem;
`;

const Scope = styled.p`
  width: inherit;
  padding: 8px 10px;
  font-size: 12px;
  font-weight: 600;
`;

const Title = styled.span`
  width: 100%;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SubTitle = styled.span`
  font-size: 12px;
`;

const KBarResult = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <Scope>{item}</Scope>
        ) : (
          <ItemWrapper active={active}>
            <TitleWrapper>
              <Title>{item.name}</Title>
              {item.subtitle && <SubTitle>{item.subtitle}</SubTitle>}
            </TitleWrapper>
          </ItemWrapper>
        )
      }
    />
  );
};

export default KBarResult;

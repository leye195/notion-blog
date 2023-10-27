import { useKBar } from "kbar";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 14px 24px;
  background-color: transparent;
  box-sizing: border-box;
  outline: none;
  border: none;

  &:focus::placeholder {
    opacity: 1;
    transition: opacity 0.25s ease 0s;
  }
`;

const KBarSearch = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { query, search, actions, currentRootActionId } = useKBar((state) => ({
    search: state.searchQuery,
    currentRootActionId: state.currentRootActionId,
    actions: state.actions,
  }));
  return (
    <Input
      ref={query.inputRefSetter}
      {...props}
      value={search}
      placeholder="Cmd (or Ctrl) + K to toggle"
      onChange={(event) => {
        props.onChange?.(event);
        query.setSearch(event.target.value);
      }}
      onKeyDown={(event) => {
        if (currentRootActionId && !search && event.key === "Backspace") {
          const parent = actions[currentRootActionId].parent;
          query.setCurrentRootAction(parent);
        }
      }}
    />
  );
};

export default KBarSearch;

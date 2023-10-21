import { type ComponentProps } from "react";
import { type notionDBRowStructed as PostCard } from "@/types/notion";
import Flex from "./Flex";
import Tag from "./Tag";

type Props = ComponentProps<"div"> & Omit<PostCard, "id">;

const PostCard = ({ date, name, tag }: Props) => {
  return (
    <Flex className="w-[inherit] p-[1rem]" $direction="column" $gap="10px">
      <Flex $gap="8px">
        {tag.map(({ name, id }) => (
          <Tag key={id} name={name} />
        ))}
      </Flex>
      <h5 className="text-[22px] font-[600]">{name}</h5>
      <Flex
        className="w-[inherit]"
        $alignItems="center"
        $justifyContent="space-between"
      >
        <time>{date}</time>
      </Flex>
    </Flex>
  );
};

export default PostCard;

"use client";

import { useState } from "react";
import Link from "next/link";
import { type notionDBRowStructed as Post } from "@/types/notion";
import { type Data } from "@/types/page";
import Flex from "@/components/common/Flex";
import PostCard from "@/components/common/PostCard";
import useFetchTags from "@/hooks/useFetchTags";

const PostPage = ({ data }: Data<Post[]>) => {
  const [filter, setFilter] = useState("all");
  const [posts, setPosts] = useState(data);

  const { data: tags } = useFetchTags();

  return (
    <Flex className="w-full p-[1rem]" $direction="column">
      <Flex className="w-[inherit]" $direction="column" $gap="12px">
        {posts.map(({ id, name, date, tag }) => (
          <Link
            className="transition duration-500 border-2 rounded-xl w-[inherit] hover:border-blue-200 "
            key={id}
            href={`/posts/${id}`}
          >
            <PostCard id={id} name={name} date={date} tag={tag} />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default PostPage;

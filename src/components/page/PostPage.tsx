"use client";

import { useState } from "react";
import Link from "next/link";
import useFetchPosts from "@/hooks/useFetchPosts";
import useFetchTags from "@/hooks/useFetchTags";
import useMounted from "@/hooks/useMounted";
import { type notionDBRowStructed as Post } from "@/types/notion";
import { type Data } from "@/types/page";
import Flex from "@/components/common/Flex";
import PostCard from "@/components/common/PostCard";
import Tag from "@/components/common/Tag";
import Button from "@/components/common/Button";

const PostPage = ({ data }: Data<Post[]>) => {
  const [category, setCategory] = useState("all");
  const isMounted = useMounted();

  const { data: posts, isLoading } = useFetchPosts<Post[]>({
    category,
    initData: data,
  });
  const { data: tags } = useFetchTags();

  const handleClickTag = (name: string) => () => {
    setCategory(name);
  };

  if (!isMounted) return <></>;

  return (
    <Flex className="w-full p-[1rem]" $direction="column">
      <Flex className="w-[inherit]" $direction="column" $gap="12px">
        <Flex
          className="my-[10px] pb-[16px] w-[inherit] border-b-2"
          $gap="8px"
          $justifyContent="center"
          $flexWrap="wrap"
        >
          <Button padding="0" onClick={handleClickTag("all")}>
            <Tag name="All" size="lg" color="white" />
          </Button>
          {tags?.map((tag: string) => (
            <Button key={tag} padding="0" onClick={handleClickTag(tag)}>
              <Tag name={tag} size="lg" color="white" />
            </Button>
          ))}
        </Flex>
        <p className="text-[22px] font-semibold">
          Total - {!isLoading && posts.length} Posts
        </p>
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

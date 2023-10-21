"use client";

import Link from "next/link";

import { type notionDBRowStructed as Post } from "@/types/notion";
import { type Data } from "@/types/page";
import Flex from "@/components/common/Flex";
import PostCard from "@/components/common/PostCard";
import SectionWithLabel from "@/components/common/SectionWithLabel";

const MainPage = ({ data }: Data<Post[]>) => {
  return (
    <Flex className="my-[1rem]" $direction="column">
      <Flex className="h-[360px]"></Flex>
      <SectionWithLabel
        className="w-full px-[1rem]"
        title={<h3 className="text-2xl font-bold mb-[8px]">Recent Posts</h3>}
      >
        <Flex className="w-[inherit]" $direction="column" $gap="12px">
          {data.map(({ id, name, date, tag }) => (
            <Link
              className="transition duration-500 border-2 rounded-xl w-[inherit] hover:border-blue-200 "
              key={id}
              href={`/posts/${id}`}
            >
              <PostCard id={id} name={name} date={date} tag={tag} />
            </Link>
          ))}
        </Flex>
      </SectionWithLabel>
    </Flex>
  );
};

export default MainPage;

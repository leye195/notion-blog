import { type Metadata } from "next";

import PostPage from "@/components/page/PostPage";

export const metadata: Metadata = {
  title: "Posts | Dan DevLog",
  description: "...",
};

async function fetchNotionData() {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();
  return data;
}

export default async function Posts() {
  const data = await fetchNotionData();
  return <PostPage data={data} />;
}
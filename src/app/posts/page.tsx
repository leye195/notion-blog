import { type Metadata } from "next";
import PostPage from "@/components/page/PostPage";

export const metadata: Metadata = {
  title: "Posts | Dan DevLog",
};

async function fetchNotionData() {
  const res = await fetch(`${process.env.BASE_URL}/api/posts`);
  const data = await res.json();
  return data;
}

export default async function Posts() {
  const data = await fetchNotionData();
  return <PostPage data={data} />;
}

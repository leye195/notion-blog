import { type Metadata } from "next";
import MainPage from "@/components/page/MainPage";
import { getPosts } from "@/apis";

export const metadata: Metadata = {
  title: "Notion Blog",
};

async function fetchNotionData() {
  const data = await getPosts("all", 5);
  return data;
}

export default async function Home() {
  const data = await fetchNotionData();
  return <MainPage data={data} />;
}

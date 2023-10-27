import { type Metadata } from "next";
import MainPage from "@/components/page/MainPage";

export const metadata: Metadata = {
  title: "Dan DevLog",
};

async function fetchNotionData() {
  const res = await fetch(`${process.env.BASE_URL}/api/posts?count=5`);
  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await fetchNotionData();
  return <MainPage data={data} />;
}

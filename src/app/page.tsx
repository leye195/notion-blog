import MainPage from "@/components/page/MainPage";

async function fetchNotionData() {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await fetchNotionData();
  return <MainPage />;
}

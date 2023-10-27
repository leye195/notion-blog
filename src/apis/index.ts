import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTags = () => api.get("/api/tags");

export const getPosts = async (category: string, count?: number) => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/posts?category=${category}${
      count != null ? `&count=${count}` : ``
    }`
  );
  const data = await res.json();
  return data;
};

import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPosts = (category: string) =>
  api.get(`/api/posts?category=${category}`);

export const getTags = () => api.get("/api/tags");

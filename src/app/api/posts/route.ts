import { retrieveDatabase } from "@/libs/notion";
import type { NextApiRequest, NextApiResponse } from "next";

type Row = {
  id: string;
  name: {
    id: string;
    title: [
      {
        text: { content: string };
      }
    ];
  };
  tag: {
    id: string;
    name: string;
  }[];
  date: {
    id: string;
    date: {
      start: string;
    };
  };
  url: string;
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const count = searchParams.get("count");
  const category = searchParams.get("category") ?? "all";
  const query = await retrieveDatabase();

  const rows = query.results.map((res) => {
    //@ts-ignore
    const { properties, url } = res;
    return {
      ...properties,
      id: res.id,
      tag: properties.tag.multi_select,
      url,
    };
  }) as Row[];
  const reStructed = rows.map((row) => ({
    id: row.id,
    name: row.name.title.reduce(
      (prev, cur) => `${prev}${cur.text.content}`,
      ""
    ),
    tag: row.tag.map((tag) => ({
      id: tag.id,
      name: tag.name,
    })),
    date: row.date.date.start,
    url: row.url,
  }));

  if (category && typeof category === "string" && category !== "all") {
    return Response.json(
      reStructed.filter(({ tag }) => {
        return tag.map(({ name }) => name).includes(category);
      })
    );
  }

  return Response.json(reStructed.slice(0, count != null ? +count : undefined));
}

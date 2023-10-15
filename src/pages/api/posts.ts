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
};

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const query = await retrieveDatabase();

  const rows = query.results.map((res) => {
    //@ts-ignore
    const { properties } = res;
    return {
      ...properties,
      id: res.id,
      tag: properties.tag.multi_select,
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
    data: row.date.date.start,
  }));
  res.status(200).json(query);
}

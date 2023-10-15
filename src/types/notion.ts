export type Tag = {
  id: string;
  name: string;
};

export type notionDBRowStructed = {
  id: string;
  name: string;
  date: string;
  tag: Tag[];
};

export type notionPage = {
  data: string;
};

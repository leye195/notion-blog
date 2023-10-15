import NotionPage from "@/components/NotionPage";
import { getNotionPage } from "@/libs/notion";
import { type PageProps } from "@/types/page";

export default async function Post({ params: { id } }: PageProps) {
  const pageId = id;
  const recordMap = await getNotionPage(pageId);

  console.log(recordMap);
  return (
    <div>
      <h1>Blog Page</h1>
      <NotionPage
        recordMap={recordMap}
        rootPageId={pageId}
        previewImagesEnabled
      />
    </div>
  );
}

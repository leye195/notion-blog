"use client";

import * as React from "react";
import { NotionRenderer } from "react-notion-x";
import dynamic from "next/dynamic";
import Image from "next/image";
import { type ExtendedRecordMap } from "notion-types";
import Flex from "@/components/common/Flex";

const Code = dynamic(
  () => import("react-notion-x/build/third-party/code").then((m) => m.Code),
  { ssr: false }
);
const Collection = dynamic(
  () =>
    import("react-notion-x/build/third-party/collection").then(
      (m) => m.Collection
    ),
  {
    ssr: false,
  }
);

type Props = {
  title: string;
  recordMap: ExtendedRecordMap;
  previewImagesEnabled?: boolean;
  rootPageId?: string;
  rootDomain?: string;
};

const NotionPage = ({
  title,
  recordMap,
  previewImagesEnabled,
  rootPageId,
  rootDomain,
}: Props) => {
  React.useEffect(() => {
    console.log(recordMap);
  }, [recordMap]);

  return (
    <Flex
      className="max-w-[1000px] mx-auto p-[16px]"
      $alignItems="center"
      $direction="column"
      $gap={12}
    >
      <h1 className="mb-0">
        <b>{title}</b>
      </h1>
      <NotionRenderer
        className="p-0"
        recordMap={recordMap}
        darkMode={false}
        rootDomain={rootDomain}
        rootPageId={rootPageId}
        previewImages={previewImagesEnabled}
        components={{
          Collection,
          Code,
          nextImage: Image,
        }}
        disableHeader
        isImageZoomable
      />
    </Flex>
  );
};

export default NotionPage;

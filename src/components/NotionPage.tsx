"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code)
);

type Props = {
  recordMap: ExtendedRecordMap;
  previewImagesEnabled?: boolean;
  rootPageId?: string;
  rootDomain?: string;
};

const NotionPage = ({
  recordMap,
  previewImagesEnabled,
  rootPageId,
  rootDomain,
}: Props) => {
  return (
    <NotionRenderer
      recordMap={recordMap}
      darkMode={false}
      rootDomain={rootDomain}
      rootPageId={rootPageId}
      previewImages={previewImagesEnabled}
      components={{
        Code,
        nextImage: Image,
      }}
      disableHeader
      isImageZoomable
    />
  );
};

export default NotionPage;

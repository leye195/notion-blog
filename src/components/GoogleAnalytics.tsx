"use client";

import Script from "next/script";

type Props = {
  gtagID: string;
};

const GoogleAnalytics = ({ gtagID }: Props) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagID}`}
      ></Script>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtagID}');
        `,
        }}
      ></Script>
    </>
  );
};

export default GoogleAnalytics;

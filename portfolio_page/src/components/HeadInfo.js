import React from "react";
import Head from "next/head";

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta keyword={keyword}></meta>
        <meta content={contents}></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
    </div>
  );
};

HeadInfo.defaultProps = {
  title: "YENA'S PORTFOLIO",
  keyword: "My Portfolio powered by Nextjs",
  contents: "Projects",
};

export default HeadInfo;

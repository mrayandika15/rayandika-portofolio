import React from "react";

import Head from "next/head";

type IHead = {
  title?: string;
};

const Title: React.FC<IHead> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Title;

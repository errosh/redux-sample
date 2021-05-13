import React from "react";
import Head from "next/head";

function layout({ children }) {
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      {children}
    </>
  );
}

export default layout;

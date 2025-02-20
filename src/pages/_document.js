import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
          <link rel="icon" href="/favicon/favicon.ico" />
        </Head>
      <body className="antialiased font-dana">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

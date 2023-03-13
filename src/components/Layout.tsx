import Head from "next/head";
import { FC, ReactNode } from "react";
import { Navbar } from "./navbar";

interface LayoutProps {
  children: ReactNode;
  title: string;
  metaContent: string;
  metaDescription: string;
}

export const Layout: FC<LayoutProps> = ({
  children,
  title,
  metaContent,
  metaDescription,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name={metaDescription} content={metaContent} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

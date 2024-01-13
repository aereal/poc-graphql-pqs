"use client";

import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";
import "graphiql/graphiql.min.css";
import "./page.css";

const Page: React.FC = () => {
  const fetcher = createGraphiQLFetcher({
    url: process.env.NEXT_PUBLIC_API_ENDPOINT ?? "",
  });
  return (
    <main className="flex min-w-max min-h-screen flex-col items-center justify-between p-24">
      <GraphiQL fetcher={fetcher} />
    </main>
  );
};

export default Page;

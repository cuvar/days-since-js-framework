"use client";

import Head from "next/head";
import Counter from "~/components/Counter";
import ErrorPage from "~/components/Error";
import Loading from "~/components/Loading";

import { api } from "~/trpc/react";

export default function Home() {
  const getCounterQuery = api.framework.getCounter.useQuery();

  return (
    <>
      <Head>
        <title>Days since last JS framework</title>
        <meta
          name="description"
          content="Counter for the days since the release of the latest JavaScript framework"
        />
        <meta
          name="keywords"
          content="javaScript, framework, counter, last, js, days, since, release"
        />
      </Head>
      <div className="flex h-full w-full items-center justify-center">
        {getCounterQuery.isLoading && <Loading />}
        {getCounterQuery.isError && <ErrorPage />}
        {getCounterQuery.isSuccess && <Counter {...getCounterQuery.data} />}
      </div>
    </>
  );
}

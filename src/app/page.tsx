"use client";

import Counter from "~/components/Counter";
import ErrorPage from "~/components/Error";
import Loading from "~/components/Loading";

import { api } from "~/trpc/react";

export default function Home() {
  const getCounterQuery = api.framework.getCounter.useQuery();

  return (
    <div className="flex h-full w-full items-center justify-center">
      {getCounterQuery.isLoading && <Loading />}
      {getCounterQuery.isError && <ErrorPage />}
      {getCounterQuery.isSuccess && <Counter {...getCounterQuery.data} />}
    </div>
  );
}

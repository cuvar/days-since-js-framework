"use client";

import ErrorPage from "~/components/Error";
import Loading from "~/components/Loading";
import RuntimesPage from "~/components/Runtimes";

import { api } from "~/trpc/react";

export default function Home() {
  const getCounterQuery = api.framework.getHistory.useQuery();

  return (
    <div className="flex h-full w-full flex-col items-center space-y-8 px-8">
      {getCounterQuery.isLoading && <Loading />}
      {getCounterQuery.isError && <ErrorPage />}
      {getCounterQuery.isSuccess && (
        <RuntimesPage runtimes={getCounterQuery.data} />
      )}
    </div>
  );
}

"use client";

import ErrorPage from "~/components/Error";
import HistoryPage from "~/components/History";
import Loading from "~/components/Loading";

import { api } from "~/trpc/react";

export default function Home() {
  const getCounterQuery = api.framework.getHistory.useQuery();

  return (
    <div className="flex h-full w-full flex-col items-center space-y-8 px-8">
      {getCounterQuery.isLoading && <Loading />}
      {getCounterQuery.isError && <ErrorPage />}
      {getCounterQuery.isSuccess && (
        <HistoryPage frameworks={getCounterQuery.data} />
      )}
    </div>
  );
}

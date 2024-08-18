"use client";

import ErrorPage from "~/components/Error";
import Loading from "~/components/Loading";
import RuntimesPage from "~/components/Runtimes";

import { api } from "~/trpc/react";

export default function Home() {
  const query = api.framework.getRuntimes.useQuery();

  return (
    <div className="flex h-full w-full flex-col items-center space-y-8 px-8">
      {query.isLoading && <Loading />}
      {query.isError && <ErrorPage />}
      {query.isSuccess && <RuntimesPage runtimes={query.data} />}
    </div>
  );
}

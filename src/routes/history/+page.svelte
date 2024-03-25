<script lang="ts">
  import Error from "$lib/Error.svelte";
  import Loading from "$lib/Loading.svelte";
  import { formatDate } from "$lib/util/date";
  import { createQuery } from "@tanstack/svelte-query";
  import type { PageData } from "./$types";

  export let data: PageData;

  async function fetchCounterData() {
    const response = await fetch("/api/history");
    return await response.json();
  }

  const query = createQuery({
    queryKey: ["historyData"],
    queryFn: fetchCounterData,
    initialData: data,
  });
</script>

<svelte:head>
  <title>Latest JS framework releases</title>
  <meta
    name="description"
    content="History of JavaScript frameworks and their release dates."
  />
  <meta
    name="keywords"
    content="javaScript, framework, counter, last, js, days, since, release"
  />
</svelte:head>
<div class="w-full h-full flex items-center flex-col space-y-8 px-8">
  {#if $query.isLoading}
    <Loading />
  {:else if $query.isError}
    <Error />
  {:else if $query.isSuccess}
    <h1 class="font-bold text-2xl">History</h1>
    <div
      class="grid grid-cols-3 gap-x-2 gap-y-4 sm:gap-x-4 text-sm sm:text-base text-left"
    >
      <div class="font-bold">Framework</div>
      <div class="font-bold">Release</div>
      <div class="font-bold text-center">Days</div>
      {#each $query.data.frameworks as framework}
        {#if framework.framework.link}
          <a
            href={framework.framework.link}
            class="hover:underline text-blue-800"
            target="_blank"
            rel="noreferrer noopenener">{framework.framework.name}</a
          >
        {:else}
          <div class="text-left">{framework.framework.name}</div>
        {/if}

        {#if framework.framework.releaseLink}
          <div>
            <a
              href={framework.framework.releaseLink}
              class="hover:underline text-blue-800"
              target="_blank"
              rel="noreferrer noopenener"
              >{formatDate(framework.framework.date)}</a
            >
          </div>
        {:else}
          <div>{formatDate(framework.framework.date)}</div>
        {/if}
        <div class="text-center">{framework.count}</div>
      {/each}
    </div>
  {/if}
</div>

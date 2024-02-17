<script lang="ts">
  import Counter from "$lib/Counter.svelte";
  import { createQuery } from "@tanstack/svelte-query";
  import type { PageData } from "./$types";

  export let data: PageData;

  async function fetchCounterData() {
    const response = await fetch("/api/counter");
    return await response.json();
  }

  const query = createQuery({
    queryKey: ["counterData"],
    queryFn: fetchCounterData,
    initialData: data,
  });
</script>

<svelte:head>
  <title>Days since last JS framework</title>
  <meta
    name="description"
    content="Counter for the days since the release of the latest jaavscript framework"
  />
  <meta
    name="keywords"
    content="javaScript, framework, counter, last, js, days, since, release"
  />
</svelte:head>

<div class="w-full h-full flex justify-center items-center">
  {#if $query.isLoading}
    <p>Loading...</p>
  {:else if $query.isError}
    <p>Error: {$query.error.message}</p>
  {:else if $query.isSuccess}
    <Counter {data} />
  {/if}
</div>

<script lang="ts">
  import Counter from "$lib/Counter.svelte";
  import Error from "$lib/Error.svelte";
  import Loading from "$lib/Loading.svelte";
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
    content="Counter for the days since the release of the latest JavaScript framework"
  />
  <meta
    name="keywords"
    content="javaScript, framework, counter, last, js, days, since, release"
  />
</svelte:head>

<div class="w-full h-full flex justify-center items-center">
  {#if $query.isLoading}
    <Loading />
  {:else if $query.isError}
    <Error />
  {:else if $query.isSuccess}
    <Counter data={$query.data} />
  {/if}
</div>

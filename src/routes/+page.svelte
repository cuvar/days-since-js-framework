<script lang="ts">
  import Counter from "$lib/Counter.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
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
  <Counter {data} />
</div>

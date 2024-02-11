<script lang="ts">
  import { zeroPad } from "$lib/util/string";
  import type { PageData } from "./$types";

  export let data: PageData;

  function formatDate(_date: Date) {
    const date = new Date(_date);
    const year = date.getFullYear();
    const month = zeroPad(date.getMonth() + 1, 2);
    const day = zeroPad(date.getDate() + 1, 2);
    return `${year}/${month}/${day}`;
  }
</script>

<svelte:head>
  <title>Latest JS framework releases</title>
  <meta
    name="description"
    content="Counter for the days since the release of the latest jaavscript framework"
  />
  <meta
    name="keywords"
    content="javaScript, framework, counter, last, js, days, since, release"
  />
</svelte:head>
<div class="w-full h-full flex items-center flex-col space-y-8 px-8">
  <h1 class="font-bold text-2xl">History</h1>
  <div
    class="grid grid-cols-4 gap-x-2 gap-y-4 sm:gap-x-4 text-sm sm:text-base text-left"
  >
    <div class="font-bold">Framework</div>
    <div class="font-bold">Link</div>
    <div class="font-bold">Release</div>
    <div class="font-bold text-center">Days</div>
    {#each data.frameworks as framework}
      <div class="text-left">{framework.framework.name}</div>
      {#if !framework.framework.link && !framework.framework.releaseLink}
        <div class="text-gray-500">N/A</div>
      {:else}
        <div>
          {#if framework.framework.link}
            <a
              href={framework.framework.link}
              class="hover:underline text-blue-800"
              target="_blank"
              rel="noreferrer noopenener">Link</a
            >
          {/if}
          {#if framework.framework.link && framework.framework.releaseLink}
            <span class="invisible sm:visible">/</span>
          {/if}
          {#if framework.framework.releaseLink}
            <a
              href={framework.framework.releaseLink}
              class="hover:underline text-blue-800 invisible sm:visible"
              target="_blank"
              rel="noreferrer noopenener">Release</a
            >
          {/if}
        </div>
      {/if}
      <div>{formatDate(framework.framework.date)}</div>
      <div class="text-center">{framework.count}</div>
    {/each}
  </div>
</div>

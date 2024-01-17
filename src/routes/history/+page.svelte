<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  function formatDate(_date: Date) {
    const date = new Date(_date);
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
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
    content="javaScript, framework, counter, last, js, days, Since, release"
  />
</svelte:head>
<div
  class="w-full h-full flex justify-center items-center flex-col space-y-8 px-8"
>
  <h1 class="font-bold text-2xl">History</h1>
  <div class="grid grid-cols-4 gap-4 text-sm">
    <div class="font-bold">Framework</div>
    <div class="font-bold">Link</div>
    <div class="font-bold">Release</div>
    <div class="font-bold">Days</div>
    {#each data.frameworks as framework}
      <div>{framework.framework.name}</div>
      <div>
        <a
          href={framework.framework.link}
          class="hover:underline text-blue-800"
          target="_blank"
          rel="noreferrer noopenener">Link</a
        >
      </div>
      <div>{formatDate(framework.framework.date)}</div>
      <div>{framework.count}</div>
    {/each}
  </div>
  <!-- <table class="table-auto">
    <thead>
      <tr>
        <th>Framework</th>
        <th>Link</th>
        <th>Release date</th>
        <th>Days since release</th>
      </tr>
    </thead>
    <tbody>
      {#each data.frameworks as framework}
        <tr>
          <th>{framework.framework.name}</th>
          <th><a href={framework.framework.link}>Link</a></th>
          <th>{framework.date}</th>
          <th>{framework.count}</th>
        </tr>
      {/each}
    </tbody>
  </table> -->
</div>

<script lang="ts">
  import "../app.css";
  import Counter from "../lib/Counter.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Days since last JS framework</title>
  <meta
    name="description"
    content="Counter for the days since the latest JS framework"
  />
</svelte:head>
<div class="font-mono w-screen h-screen">
  <main class="w-full h-full flex justify-center items-center">
    {#if data.status == 500}
      <div>An error occurred</div>
    {:else}
      <Counter {data} />
    {/if}
  </main>
  <footer class="text-sm text-center py-8 absolute bottom-0 w-full mx-4">
    You think the data is wrong? Send me an email: info (at) cuvar.dev
  </footer>
</div>

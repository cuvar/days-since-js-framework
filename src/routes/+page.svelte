<script lang="ts">
  import Counter from "../lib/Counter.svelte";
  import "../app.css";
</script>

<svelte:head>
  <title>Days since last JS framework</title>
  <meta
    name="description"
    content="Counter for the days since the latest JS framework"
  />
</svelte:head>
<main class="w-screen h-screen flex justify-center items-center">
  <Counter />
</main>

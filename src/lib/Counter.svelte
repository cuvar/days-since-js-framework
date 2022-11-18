<script lang="ts">
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<div class="flex flex-col text-center text-xl space-y-8 font-mono">
  <p>It's been</p>
  <p class="font-bold text-9xl">{count}</p>
  <p>days since the last JS framework</p>
</div>

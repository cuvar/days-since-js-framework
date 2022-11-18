<script lang="ts">
  export let data: { count: number };
</script>

<div class="flex flex-col text-center text-xl space-y-8 font-mono">
  <p>It's been</p>
  <p class="font-bold text-9xl">{data.count}</p>
  <p>day(s) since the last JavaScript framework</p>
</div>

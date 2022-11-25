<script lang="ts">
  export let data: { count: number; name: string; link: string; date: string };
</script>

<div class="flex flex-col text-center text-xl space-y-8 mx-4">
  <p>It's been</p>
  <p class="font-bold text-9xl">{data.count}</p>
  <p>day(s) since the latest JavaScript framework.</p>
  <div class="flex w-full text-sm">
    <p class="w-full text-center">
      Last JS framework:
      <a
        href={data.link}
        class="hover:underline text-blue-800"
        target="_blank"
        rel="noreferrer noopenener">{data.name}</a
      >
      released on {data.date}
    </p>
  </div>
</div>

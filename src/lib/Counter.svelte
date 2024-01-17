<script lang="ts">
  import type { FrameworkData } from "$lib/server/types";

  type Props = {
    count: number;
    date: string;
    framework: FrameworkData;
  };

  export let data: Props;
</script>

<div class="flex flex-col text-center text-xl space-y-8 mx-4">
  <p>It's been</p>
  <p class="font-bold text-9xl">{data.count}</p>
  <p>day(s) since the latest JavaScript framework.</p>
  <div class="flex w-full text-sm">
    <p class="w-full text-center">
      Last JS framework:
      <a
        href={data.framework.link}
        class="hover:underline text-blue-800"
        target="_blank"
        rel="noreferrer noopenener">{data.framework.name}</a
      >
      released on {data.date}
    </p>
  </div>
</div>

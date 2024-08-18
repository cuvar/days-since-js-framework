import { calculateDays } from "~/util/date";
import * as runtimeRepo from "../db/runtime";
import { type RuntimeData } from "../types";

export async function getRuntimeData(): Promise<RuntimeData[]> {
  const data = await runtimeRepo.getAll();

  const withDate = data.map((f) => {
    const diffDays = f.date ? calculateDays(f.date) : null;
    const displayDate = f.date
      ? f.date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "Unknown";

    return {
      count: diffDays,
      date: displayDate,
      entity: f,
    } satisfies RuntimeData;
  });

  const sortedByDate = withDate.sort((a, b) => {
    if (a.entity.date && b.entity.date) {
      return b.entity.date.getTime() - a.entity.date.getTime();
    }

    return -1;
  });

  return sortedByDate;
}

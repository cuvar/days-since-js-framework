import { calculateDays } from "~/util/date";
import * as runtimeRepo from "../db/runtime";
import { type HistoryData } from "../types";

export async function getRuntimeData(): Promise<HistoryData[]> {
  // TODO: this is wrong
  const data = await runtimeRepo.getAll();

  const withDate = data.map((f) => {
    const diffDays = calculateDays(f.date);
    const displayDate = f.date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return {
      count: diffDays,
      date: displayDate,
      entity: f,
    } satisfies HistoryData;
  });

  return withDate;
}

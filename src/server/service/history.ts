import { calculateDays } from "~/util/date";
import * as frameworkRepo from "../db/framework";
import { type HistoryData } from "../types";

export async function getHistoryData(): Promise<HistoryData[]> {
  const frameworks = await frameworkRepo.getAll();

  const withDate = frameworks.map((f) => {
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

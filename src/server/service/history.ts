import { calculateDays } from "~/util/date";
import { getAllFrameWorks } from "../db/query";
import { type HistoryData } from "../types";

export async function getHistoryData(): Promise<HistoryData[]> {
  const frameworks = await getAllFrameWorks();

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
      framework: f,
    } satisfies HistoryData;
  });

  return withDate;
}

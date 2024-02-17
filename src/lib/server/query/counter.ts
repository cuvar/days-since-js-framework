import { calculateDays } from "$lib/util/date";
import { getLatest } from "../db/query";

export async function getCounterData() {
  const latestFramework = await getLatest();
  const diffDays = calculateDays(latestFramework.date);
  const displayDate = latestFramework.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return {
    count: diffDays,
    date: displayDate,
    framework: latestFramework,
  };
}

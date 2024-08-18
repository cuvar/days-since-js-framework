import { calculateDays } from "~/util/date";
import * as frameworkRepo from "../db/framework";

export async function getCounterData() {
  const latestFramework = await frameworkRepo.getLatest();
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

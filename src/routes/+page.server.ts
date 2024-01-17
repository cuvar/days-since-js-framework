import { error } from "@sveltejs/kit";
import { getLatest } from "../server/db/db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  try {
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
  } catch (err) {
    error(401, "Cannot load data");
  }
};

function calculateDays(date: Date): number {
  // difference in days
  const diffTime = Math.abs(new Date().getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

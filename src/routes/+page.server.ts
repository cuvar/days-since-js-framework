import { getLatest } from "$lib/server/db/query";
import { calculateDays } from "$lib/util/date";
import { error } from "@sveltejs/kit";
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

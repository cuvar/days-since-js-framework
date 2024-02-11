import { getAllFrameWorks } from "$lib/server/db/query";
import { calculateDays } from "$lib/util/date";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  try {
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
      };
    });

    return {
      frameworks: withDate,
    };
  } catch (err) {
    error(401, "Cannot load data");
  }
};

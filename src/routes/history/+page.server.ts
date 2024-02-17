import { getHistoryData } from "$lib/server/query/history";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  try {
    return await getHistoryData();
  } catch (err) {
    error(401, "Cannot load data");
  }
};

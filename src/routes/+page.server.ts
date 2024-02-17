import { getCounterData } from "$lib/server/query/counter";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const ssr = false;

export const load: PageServerLoad = async ({ params }) => {
  try {
    return await getCounterData();
  } catch (err) {
    error(401, "Cannot load data");
  }
};

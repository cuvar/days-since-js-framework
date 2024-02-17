import { getHistoryData } from "$lib/server/query/history";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url }) => {
  const counterData = await getHistoryData();
  return new Response(JSON.stringify(counterData));
};

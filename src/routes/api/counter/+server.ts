import { getCounterData } from "$lib/server/query/counter";
import type { RequestHandler } from "./$types";

const DATE_REGEX = new RegExp(
  "2[0-9]{3}-(0[1-9]|10|11|12)-(0[1-9]|(1|2)[0-9]|30|31)"
);

export const GET: RequestHandler = async ({ url }) => {
  const counterData = await getCounterData();
  return new Response(JSON.stringify(counterData));
};

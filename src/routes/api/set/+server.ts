import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import redis from "../../../../src/util/redis";

const dateRegex = new RegExp("2[0-9]{3}-(0[1-9]|10|11|12)-(0[1-9]|10|11|12)");

export const POST: RequestHandler = async ({ request }) => {
  const now = new Date();
  const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

  let dateToUpdate = "";
  const { date } = await request.json();

  if (typeof date !== "string" || !dateRegex.test(date)) {
    dateToUpdate = today;
  } else {
    dateToUpdate = date;
  }

  await redis.set("datelastjsframework", dateToUpdate);
  return new Response(JSON.stringify({ message: "successful" }));
};

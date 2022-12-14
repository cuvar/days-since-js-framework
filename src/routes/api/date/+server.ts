import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import redis from "../../../util/redis";
import { POST_TOKEN } from "$env/static/private";

const dateRegex = new RegExp(
  "2[0-9]{3}-(0[1-9]|10|11|12)-(0[1-9]|(1|2)[0-9]|30|31)"
);

export const POST: RequestHandler = async ({ request }) => {
  const now = new Date();
  const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

  let dateToUpdate = "";
  const { date, token } = await request.json();

  if (token !== POST_TOKEN) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  if (typeof date !== "string" || !dateRegex.test(date)) {
    return new Response(JSON.stringify({ message: "Bad Request" }), {
      status: 400,
    });
  }

  dateToUpdate = date;

  await redis.set("datelastjsframework", dateToUpdate);
  return new Response(JSON.stringify({ message: "successful" }));
};

import { POST_TOKEN } from "$env/static/private";
import { addFramework } from "$lib/server/db/query";
import type { RequestHandler } from "./$types";

const DATE_REGEX = new RegExp(
  "2[0-9]{3}-(0[1-9]|10|11|12)-(0[1-9]|(1|2)[0-9]|30|31)"
);

/**
 * Request body:
 * {
 *  "link": "https://svelte.dev/",
 *  "name": "Svelte",
 *  "date": "2022-01-31",
 *  "token": <token>
 * }
 */

export const POST: RequestHandler = async ({ request }) => {
  const { link, name, token, date } = await request.json();

  if (token !== POST_TOKEN) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  let linkToUpdate = link;

  try {
    new URL(link);
  } catch (_) {
    linkToUpdate = "";
  }

  if (typeof link !== "string" || link.length > 100) {
    linkToUpdate = "";
  }

  let nameToUpdate = name;
  if (typeof name !== "string" || name.length > 30) {
    nameToUpdate = "";
  }

  if (linkToUpdate === "" || nameToUpdate === "") {
    return new Response(JSON.stringify({ message: "Bad Request" }), {
      status: 400,
    });
  }

  if (typeof date !== "string" || !DATE_REGEX.test(date)) {
    return new Response(JSON.stringify({ message: "Bad Request" }), {
      status: 400,
    });
  }

  try {
    addFramework(nameToUpdate, linkToUpdate, date);
    return new Response(JSON.stringify({ message: "successful" }));
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
};

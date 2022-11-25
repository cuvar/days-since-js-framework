import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import redis from "../../../util/redis";
import { POST_TOKEN } from "$env/static/private";

const linkRegex = new RegExp("http(s)?://[a-z]*(.[a-z])*");

export const POST: RequestHandler = async ({ request }) => {
  const { link, name, token } = await request.json();

  if (token !== POST_TOKEN) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  let linkToUpdate = link;
  if (typeof link !== "string" || !linkRegex.test(link) || link.length > 50) {
    linkToUpdate = "";
  }

  let nameToUpdate = name;
  if (typeof name !== "string" || name.length > 20) {
    nameToUpdate = "";
  }

  try {
    await redis.set("jsframeworklink", linkToUpdate);
    await redis.set("jsframework", nameToUpdate);
    return new Response(JSON.stringify({ message: "successful" }));
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
};

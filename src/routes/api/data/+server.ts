import type { RequestHandler } from "./$types";
import redis from "../../../util/redis";
import { POST_TOKEN } from "$env/static/private";

export const POST: RequestHandler = async ({ request }) => {
  const { link, name, token } = await request.json();

  if (token !== POST_TOKEN) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  let linkToUpdate = link;

  try {
    let url = new URL(link);
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

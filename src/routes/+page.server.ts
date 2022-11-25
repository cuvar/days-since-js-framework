import { Redis } from "@upstash/redis";
import type { PageServerLoad } from "./$types";
import {
  UPSTASH_REDIS_REST_TOKEN,
  UPSTASH_REDIS_REST_URL,
} from "$env/static/private";

const redis = new Redis({
  url: UPSTASH_REDIS_REST_URL,
  token: UPSTASH_REDIS_REST_TOKEN,
});

export const load: PageServerLoad = async ({ params }) => {
  const lastJSDate: Date | null = await getCountData();
  const lastJSName: string | null = await getNameData();
  const lastJSLink: string | null = await getLinkData();

  if (!lastJSDate || !lastJSName || !lastJSLink) {
    return {
      status: 500,
    };
  }

  // difference in days
  const diffTime = Math.abs(new Date().getTime() - lastJSDate.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const displayDate = lastJSDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return {
    count: diffDays,
    date: displayDate,
    name: lastJSName,
    link: lastJSLink,
  };
};

async function getCountData(): Promise<Date | null> {
  try {
    const res = (await redis.get("datelastjsframework")) as string;
    const date = res ? new Date(res) : null;
    return date;
  } catch (error) {
    return null;
  }
}

async function getNameData(): Promise<string | null> {
  try {
    const res = (await redis.get("jsframework")) as string;
    const name = res ? res : null;
    return name;
  } catch (error) {
    return null;
  }
}

async function getLinkData(): Promise<string | null> {
  try {
    const res = (await redis.get("jsframeworklink")) as string;
    const link = res ? res : null;
    return link;
  } catch (error) {
    return null;
  }
}

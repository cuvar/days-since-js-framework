import { Redis } from "@upstash/redis";
import type { PageServerLoad } from "./$types";
import {
  UPSTASH_REDIS_REST_TOKEN,
  UPSTASH_REDIS_REST_URL,
} from "$env/static/private";

export const load: PageServerLoad = async ({ params }) => {
  const lastJSDate: Date = await getCountData();
  // difference in days
  const diffTime = Math.abs(new Date().getTime() - lastJSDate.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return {
    count: diffDays,
  };
};

async function getCountData(): Promise<Date> {
  const redis = new Redis({
    url: UPSTASH_REDIS_REST_URL,
    token: UPSTASH_REDIS_REST_TOKEN,
  });
  const res = (await redis.get("datelastjsframework")) as string;
  const date = res ? new Date(res) : new Date();
  return date;
}

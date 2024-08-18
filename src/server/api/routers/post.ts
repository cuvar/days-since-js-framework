import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getCounterData } from "~/server/query/counter";
import { getHistoryData } from "~/server/query/history";

export const postRouter = createTRPCRouter({
  getCounter: publicProcedure.query(async () => {
    const counterData = await getCounterData();
    return counterData;
  }),
  getHistory: publicProcedure.query(async () => {
    const counterData = await getHistoryData();
    return counterData;
  }),
});

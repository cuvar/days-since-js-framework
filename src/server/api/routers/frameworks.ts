import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getCounterData } from "~/server/service/counter";
import { getHistoryData } from "~/server/service/history";
import { getRuntimeData } from "~/server/service/runtimes";

export const frameworkRouter = createTRPCRouter({
  getCounter: publicProcedure.query(async () => {
    try {
      const counterData = await getCounterData();
      return counterData;
    } catch (error) {
      console.log(error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Unable to get hidden widget layouts",
      });
    }
  }),
  getHistory: publicProcedure.query(async () => {
    try {
      const counterData = await getHistoryData();
      return counterData;
    } catch (error) {
      console.log(error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Unable to get hidden widget layouts",
      });
    }
  }),
  getRuntimes: publicProcedure.query(async () => {
    try {
      const counterData = await getRuntimeData();
      return counterData;
    } catch (error) {
      console.log(error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Unable to get hidden widget layouts",
      });
    }
  }),
});

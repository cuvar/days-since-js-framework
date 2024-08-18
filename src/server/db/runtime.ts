import { db } from "../db";

export async function getAll() {
  const all = await db.runtime.findMany({
    orderBy: {
      date: "desc", // Order the results by date in descending order
    },
  });
  return all;
}

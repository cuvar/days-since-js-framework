import { db } from "../db";

export async function getAllFrameWorks() {
  const allFrameWorks = await db.framework.findMany({
    orderBy: {
      date: "desc", // Order the results by date in descending order
    },
  });
  return allFrameWorks;
}

export async function getLatest() {
  const mostCurrent = await db.framework.findFirst({
    orderBy: {
      date: "desc", // Order the results by date in descending order
    },
  });

  if (!mostCurrent) {
    throw new Error("No framework data found");
  }

  return mostCurrent;
}

export async function getLastN(number: number) {
  const mostCurrent = await db.framework.findMany({
    orderBy: {
      date: "desc", // Order the results by date in descending order
    },
    take: number,
  });

  return mostCurrent;
}

export async function addFramework(name: string, link: string, date: string) {
  await db.framework.create({
    data: {
      name: name,
      link: link,
      date: new Date(date),
    },
  });
}

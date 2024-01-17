import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllFrameWorks() {
  try {
    const allFrameWorks = await prisma.framework.findMany();
    await prisma.$disconnect();
    return allFrameWorks;
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

export async function getLatest() {
  try {
    const mostCurrent = await prisma.framework.findFirst({
      orderBy: {
        date: "desc", // Order the results by date in descending order
      },
    });

    if (!mostCurrent) {
      throw new Error("No framework data found");
    }

    await prisma.$disconnect();
    return mostCurrent;
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

export async function getLastN(number: number) {
  try {
    const mostCurrent = await prisma.framework.findMany({
      orderBy: {
        date: "desc", // Order the results by date in descending order
      },
      take: number,
    });

    await prisma.$disconnect();
    return mostCurrent;
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

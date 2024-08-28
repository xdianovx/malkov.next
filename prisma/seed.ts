import { prisma } from "@/prisma/db";
import { hashSync } from "bcrypt";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        name: "admin",
        email: "admin",
      },
      {
        name: "user",
        email: "user",
      },
    ],
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`;
  await prisma.user.deleteMany({});
}

async function main() {
  try {
    await up();
    await down();
  } catch (error) {
    console.log(error);
  }
}

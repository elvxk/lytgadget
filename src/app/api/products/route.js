import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST() {
  const products = await prisma.products.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return NextResponse.json({
    status: "OK",
    code: 200,
    message: "success get products",
    data: products,
  });
}

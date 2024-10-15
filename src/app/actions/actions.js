"use server";

import prisma from "@/libs/prisma";

export async function createProduct(formData, image) {
  const addProduct = await prisma.products.create({
    data: {
      name: formData.get("nama"),
      status: formData.get("status"),
      ram: formData.get("ram"),
      price: Number(formData.get("price")),
      link: formData.get("link"),
      image: image,
    },
  });
  if (addProduct) {
    console.log("Comment updated successfully:", addProduct);
    return true;
  } else {
    console.error("Comment not found or update failed.");
  }
}

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
    return true;
  }
}
export async function deleteProduct(formData) {
  const deleteProduct = await prisma.products.delete({
    where: {
      id: formData.id,
    },
  });
  if (deleteProduct) {
    return true;
  }
}

export async function updateProduct(formData) {
  console.log(formData);

  // const deleteProduct = await prisma.products.update({
  //   where: {
  //     id: formData.id,
  //   },
  //   data: {
  //     name: formData.name
  //   }
  // });
  // if (deleteProduct) {
  //   return true;
  // }
}

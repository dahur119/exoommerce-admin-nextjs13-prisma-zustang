import React, { useEffect } from "react";

import { ProductForm } from "./components/product-form";

import prismadb from "@/lib/prismadb";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: true,
    },
  });
  console.log("checker", product);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-8">
        <ProductForm initialData={product} />
      </div>
    </div>
  );
};

export default ProductPage;

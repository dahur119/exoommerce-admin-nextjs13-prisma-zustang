import { format } from "date-fns";
import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";
import { ProductClient } from "./components/client";
import { ProductsColumn } from "./components/columns";

const ProductsPage = async ({ params }: { params: { storeId: string } }) => {
  const products = await prismadb.product.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      category: true,
      size: true,
      color: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  console.log("checking", products);

  const formattedProducts: ProductsColumn[] = products.map((item) => ({
    id: item.id,
    label: item.name,
    isFeatured: item.isFeatured,
    price: formatter.format(item.price.toNumber()),
    category: item.category?.name,
    size: item.size?.name,
    color: item.color?.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <div className="flex-col">
      <div className="flex-3 space-y-4 p-8">
        <ProductClient data={formattedProducts} />
      </div>
    </div>
  );
};
export default ProductsPage;

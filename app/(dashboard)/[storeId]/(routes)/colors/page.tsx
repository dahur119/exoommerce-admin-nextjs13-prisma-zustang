import { format } from "date-fns";
import prismadb from "@/lib/prismadb";
import { ColorsClient } from "./components/client";
import { ColorsColumn } from "./components/columns";

const ColorPage = async ({ params }: { params: { storeId: string } }) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedColors: ColorsColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <div className="flex-col">
      <div className="flex-3 space-y-4 p-8">
        <ColorsClient data={formattedColors} />
      </div>
    </div>
  );
};
export default ColorPage;

import React, { useEffect } from "react";

// import { BillboardForm } from "./components/size-form";
import { ColorForm } from "./components/color-form";

import prismadb from "@/lib/prismadb";

const ColorPage = async ({ params }: { params: { colorId: string } }) => {
  const colors = await prismadb.color.findUnique({
    where: {
      id: params.colorId,
    },
  });
  console.log("checker", colors);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-8">
        <ColorForm initialData={colors} />
      </div>
    </div>
  );
};

export default ColorPage;

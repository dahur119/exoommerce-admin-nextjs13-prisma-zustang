import React, { useEffect } from "react";

// import { BillboardForm } from "./components/size-form";
import { SizeForm } from "./components/size-form";

import prismadb from "@/lib/prismadb";

const SizePage = async ({ params }: { params: { sizeId: string } }) => {
  const sizes = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });
  console.log("checker", sizes);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-8">
        <SizeForm initialData={sizes} />
      </div>
    </div>
  );
};

export default SizePage;

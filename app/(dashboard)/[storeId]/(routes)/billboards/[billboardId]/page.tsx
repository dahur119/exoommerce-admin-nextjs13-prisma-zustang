import React, { useEffect } from "react";

import { BillboardForm } from "./components/billboard-form";

import prismadb from "@/lib/prismadb";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });
  console.log("checker", billboard);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-8">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;

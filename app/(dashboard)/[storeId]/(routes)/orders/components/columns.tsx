"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "../[billboardId]/components/cell-action";

export type OrderColumn = {
  id: string;
  phone: string;
  address: String;
  isPaid: Boolean;
  totalPrice: String;
  products: String;
  createdAt: string;
};

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "products",
    header: "products",
  },
  {
    accessorKey: "phone",
    header: "phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price ",
  },
  {
    accessorKey: "isPaid",
    header: "Paid",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];

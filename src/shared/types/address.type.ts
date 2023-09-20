import { Address } from "@prisma/client";

export type TOmitAddress = Omit<Address, "createdAt" | "updatedAt">;

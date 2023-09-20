import { Tag } from "@prisma/client";

export type TOmitTag = Omit<Tag, "createdAt" | "updatedAt">;

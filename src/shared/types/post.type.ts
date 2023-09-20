import { Post } from "@prisma/client";

export type TOmitPost = Omit<Post, "createdAt" | "updatedAt">;

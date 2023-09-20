import { User } from "@prisma/client";

export type TOmitUser = Omit<User, "password" | "createdAt" | "updatedAt">;

export type TOmitUserWithPassword = Omit<User, "createdAt" | "updatedAt">;

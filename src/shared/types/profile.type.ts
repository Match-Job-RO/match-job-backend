import { Profile } from "@prisma/client";

export type TOmitProfile = Omit<Profile, "createdAt" | "updatedAt">;

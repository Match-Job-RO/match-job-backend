import { Address, GenreEnum, Post, Tag } from "@prisma/client";

export class CreateProfileDto {
    bio: string;
    image?: string;
    phone?: string;
    userId: number;
    genre?: GenreEnum;
    posts?: Post[];
    address?: Address[];
    followedTags?: Tag[];
    createdAt: Date;
    updatedAt: Date;
}

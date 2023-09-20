import { PostTypeEnum, Tag } from "@prisma/client";

export class CreatePostDto {
    title: string;
    content: string;
    postType: PostTypeEnum;
    tags: Tag[];
    createdAt: Date;
    updatedAt: Date;
    profileId: number;
}

import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PrismaClient } from "@prisma/client";
import PrismaInstance from "src/shared/utils/prisma.client";
import { UpdatePostDto } from "./dto/update-post.dto";
import { TOmitPost } from "src/shared/types/post.type";

@Injectable()
export class PostRepository {
    async create(createPostDto: CreatePostDto): Promise<TOmitPost> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const createdPost: TOmitPost = await prismaInstance.post.create({
            data: {
                title: createPostDto.title,
                content: createPostDto.content,
                postType: createPostDto.postType,
                profileId: createPostDto.profileId,
                tags: {
                    connect: createPostDto.tags,
                },
            },
            select: {
                id: true,
                title: true,
                content: true,
                postType: true,
                profileId: true,
                tags: true,
                profile: true,
            },
        });

        return createdPost;
    }

    async findAll(): Promise<TOmitPost[]> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const posts: TOmitPost[] = await prismaInstance.post.findMany({
            select: {
                id: true,
                title: true,
                content: true,
                postType: true,
                profileId: true,
                tags: true,
                profile: {
                    select: {
                        phone: true,
                        userId: true,
                        user: {
                            select: {
                                name: true,
                            },
                        },
                    },
                },
            },
        });

        return posts;
    }

    async findOne(id: number): Promise<TOmitPost> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const post: TOmitPost = await prismaInstance.post.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                title: true,
                content: true,
                postType: true,
                profileId: true,
                tags: true,
                profile: true,
            },
        });

        return post;
    }

    async update(id: number, updatePostDto: UpdatePostDto): Promise<TOmitPost> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const updatedPost: TOmitPost = await prismaInstance.post.update({
            where: {
                id: id,
            },
            data: {
                title: updatePostDto.title,
                content: updatePostDto.content,
                postType: updatePostDto.postType,
                profileId: updatePostDto.profileId,
            },
            select: {
                id: true,
                title: true,
                content: true,
                postType: true,
                profileId: true,
                tags: true,
                profile: true,
            },
        });

        return updatedPost;
    }

    async remove(id: number): Promise<TOmitPost> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const deletedPost: TOmitPost = await prismaInstance.post.delete({
            where: {
                id: id,
            },
            select: {
                id: true,
                title: true,
                content: true,
                postType: true,
                profileId: true,
                tags: true,
                profile: true,
            },
        });

        return deletedPost;
    }
}

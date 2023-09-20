import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { Post, PrismaClient } from "@prisma/client";
import PrismaInstance from "src/shared/utils/prisma.client";
import { UpdatePostDto } from "./dto/update-post.dto";

@Injectable()
export class PostRepository {
    async create(createPostDto: CreatePostDto): Promise<Post> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const createdPost: Post = await prismaInstance.post.create({
            data: {
                title: createPostDto.title,
                content: createPostDto.content,
                postType: createPostDto.postType,
                profileId: createPostDto.profileId,
                tags: {
                    connect: createPostDto.tags,
                },
            },
        });

        return createdPost;
    }

    async findAll(): Promise<Post[]> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const posts: Post[] = await prismaInstance.post.findMany();

        return posts;
    }

    async findOne(id: number): Promise<Post> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const post: Post = await prismaInstance.post.findUnique({
            where: {
                id: id,
            },
        });

        return post;
    }

    async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const updatedPost: Post = await prismaInstance.post.update({
            where: {
                id: id,
            },
            data: {
                title: updatePostDto.title,
                content: updatePostDto.content,
                postType: updatePostDto.postType,
                profileId: updatePostDto.profileId,
            },
        });

        return updatedPost;
    }

    async remove(id: number): Promise<Post> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const deletedPost: Post = await prismaInstance.post.delete({
            where: {
                id: id,
            },
        });

        return deletedPost;
    }
}
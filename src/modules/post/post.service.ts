import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { Post } from "@prisma/client";
import { PostRepository } from "./post.repository";
import { TOmitPost } from "src/shared/types/post.type";

@Injectable()
export class PostService {
    constructor(private readonly postRepository: PostRepository) {}
    async create(createPostDto: CreatePostDto): Promise<TOmitPost> {
        const createdPost: TOmitPost =
            await this.postRepository.create(createPostDto);
        return createdPost;
    }

    async findAll(): Promise<TOmitPost[]> {
        const allPost: TOmitPost[] = await this.postRepository.findAll();
        return allPost;
    }

    async findOne(id: number): Promise<TOmitPost> {
        const post: TOmitPost = await this.postRepository.findOne(id);

        return post;
    }

    async update(id: number, updatePostDto: UpdatePostDto): Promise<TOmitPost> {
        const updatedPost: TOmitPost = await this.postRepository.update(
            id,
            updatePostDto,
        );
        return updatedPost;
    }

    async remove(id: number): Promise<TOmitPost> {
        const deletedPost: TOmitPost = await this.postRepository.remove(id);
        return deletedPost;
    }
}

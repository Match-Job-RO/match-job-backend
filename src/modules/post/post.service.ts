import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { Post, User } from "@prisma/client";
import { PostRepository } from "./post.repository";

@Injectable()
export class PostService {
    constructor(private readonly postRepository: PostRepository) {}
    async create(createPostDto: CreatePostDto): Promise<Post> {
        const createPost: Post =
            await this.postRepository.create(createPostDto);
        return createPost;
    }

    async findAll(): Promise<Post[]> {
        const allPost: Post[] = await this.postRepository.findAll();
        return allPost;
    }

    async findOne(id: number): Promise<Post> {
        const post: Post = await this.postRepository.findOne(id);

        return post;
    }

    async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
        const updatePost: Post = await this.postRepository.update(
            id,
            updatePostDto,
        );
        return updatePost;
    }

    async remove(id: number): Promise<Post> {
        const deletePost: Post = await this.postRepository.remove(id);
        return deletePost;
    }
}

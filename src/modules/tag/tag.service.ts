import { Injectable } from "@nestjs/common";
import { TagRepository } from "./tag.repository";
import { CreateTagDto } from "./dto/create-tag.dto";
import { Tag } from "@prisma/client";
import { UpdateTagDto } from "./dto/update-tag.dto";

@Injectable()
export class TagService {
    constructor(private readonly tagRepository: TagRepository) {}
    async create(createTagDto: CreateTagDto): Promise<Tag> {
        const createdTag: Tag = await this.tagRepository.create(createTagDto);
        return createdTag;
    }

    async findAll(): Promise<Tag[]> {
        const allTags: Tag[] = await this.tagRepository.findAll();
        return allTags;
    }

    async findOne(id: number): Promise<Tag> {
        const tag: Tag = await this.tagRepository.findOne(id);

        return tag;
    }

    async update(id: number, updateTagDto: UpdateTagDto): Promise<Tag> {
        const updatedTag: Tag = await this.tagRepository.update(
            id,
            updateTagDto,
        );
        return updatedTag;
    }

    async remove(id: number): Promise<Tag> {
        const deletedTag: Tag = await this.tagRepository.remove(id);
        return deletedTag;
    }
}

import { Injectable } from "@nestjs/common";
import { TagRepository } from "./tag.repository";
import { CreateTagDto } from "./dto/create-tag.dto";
import { UpdateTagDto } from "./dto/update-tag.dto";
import { TOmitTag } from "src/shared/types/tag.type";

@Injectable()
export class TagService {
    constructor(private readonly tagRepository: TagRepository) {}
    async create(createTagDto: CreateTagDto): Promise<TOmitTag> {
        const createdTag: TOmitTag =
            await this.tagRepository.create(createTagDto);
        return createdTag;
    }

    async findAll(): Promise<TOmitTag[]> {
        const allTags: TOmitTag[] = await this.tagRepository.findAll();
        return allTags;
    }

    async findOne(id: number): Promise<TOmitTag> {
        const tag: TOmitTag = await this.tagRepository.findOne(id);

        return tag;
    }

    async update(id: number, updateTagDto: UpdateTagDto): Promise<TOmitTag> {
        const updatedTag: TOmitTag = await this.tagRepository.update(
            id,
            updateTagDto,
        );
        return updatedTag;
    }

    async remove(id: number): Promise<TOmitTag> {
        const deletedTag: TOmitTag = await this.tagRepository.remove(id);
        return deletedTag;
    }
}

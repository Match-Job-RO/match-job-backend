import { Injectable } from "@nestjs/common";
import PrismaInstance from "src/shared/utils/prisma.client";
import { PrismaClient, Tag } from "@prisma/client";
import { CreateTagDto } from "./dto/create-tag.dto";
import { UpdateTagDto } from "./dto/update-tag.dto";

@Injectable()
export class TagRepository {
    async create(createTagDto: CreateTagDto): Promise<Tag> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const createdTag: Tag = await prismaInstance.tag.create({
            data: {
                name: createTagDto.name,
            },
        });

        return createdTag;
    }

    async findAll(): Promise<Tag[]> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const allTags: Tag[] = await prismaInstance.tag.findMany();

        return allTags;
    }

    async findOne(id: number): Promise<Tag> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const tag: Tag = await prismaInstance.tag.findUnique({
            where: {
                id: id,
            },
        });

        return tag;
    }

    async update(id: number, updateTagDto: UpdateTagDto): Promise<Tag> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const updatedTag: Tag = await prismaInstance.tag.update({
            where: {
                id: id,
            },
            data: {
                name: updateTagDto.name,
            },
        });

        return updatedTag;
    }

    async remove(id: number): Promise<Tag> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const deletedTag: Tag = await prismaInstance.tag.delete({
            where: {
                id: id,
            },
        });

        return deletedTag;
    }
}

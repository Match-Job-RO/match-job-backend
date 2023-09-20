import { Injectable } from "@nestjs/common";
import PrismaInstance from "src/shared/utils/prisma.client";
import { PrismaClient } from "@prisma/client";
import { CreateTagDto } from "./dto/create-tag.dto";
import { UpdateTagDto } from "./dto/update-tag.dto";
import { TOmitTag } from "src/shared/types/tag.type";

@Injectable()
export class TagRepository {
    async create(createTagDto: CreateTagDto): Promise<TOmitTag> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const createdTag: TOmitTag = await prismaInstance.tag.create({
            data: {
                name: createTagDto.name,
            },
            select: {
                id: true,
                name: true,
                posts: true,
                profiles: true,
            },
        });

        return createdTag;
    }

    async findAll(): Promise<TOmitTag[]> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const allTags: TOmitTag[] = await prismaInstance.tag.findMany({
            select: {
                id: true,
                name: true,
            },
        });

        return allTags;
    }

    async findOne(id: number): Promise<TOmitTag> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const tag: TOmitTag = await prismaInstance.tag.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                name: true,
            },
        });

        return tag;
    }

    async update(id: number, updateTagDto: UpdateTagDto): Promise<TOmitTag> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const updatedTag: TOmitTag = await prismaInstance.tag.update({
            where: {
                id: id,
            },
            data: {
                name: updateTagDto.name,
            },
            select: {
                id: true,
                name: true,
            },
        });

        return updatedTag;
    }

    async remove(id: number): Promise<TOmitTag> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const deletedTag: TOmitTag = await prismaInstance.tag.delete({
            where: {
                id: id,
            },
            select: {
                id: true,
                name: true,
            },
        });

        return deletedTag;
    }
}

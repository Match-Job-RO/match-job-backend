import { Injectable } from "@nestjs/common";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import PrismaInstance from "src/shared/utils/prisma.client";
import { PrismaClient } from "@prisma/client";
import { TOmitProfile } from "src/shared/types/profile.type";

@Injectable()
export class ProfileRepository {
    async create(createProfileDto: CreateProfileDto): Promise<TOmitProfile> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const createdProfile: TOmitProfile =
            await prismaInstance.profile.create({
                data: {
                    bio: createProfileDto.bio,
                    genre: createProfileDto.genre,
                    image: createProfileDto.image,
                    phone: createProfileDto.phone,
                    userId: createProfileDto.userId,
                },
                select: {
                    id: true,
                    bio: true,
                    genre: true,
                    image: true,
                    phone: true,
                    userId: true,
                    user: true,
                    followedTags: true,
                    posts: true,
                    address: true,
                },
            });

        return createdProfile;
    }

    async findAll(): Promise<TOmitProfile[]> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const profiles: TOmitProfile[] =
            await prismaInstance.profile.findMany();

        return profiles;
    }

    async findOne(id: number): Promise<TOmitProfile> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const profile: TOmitProfile = await prismaInstance.profile.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                bio: true,
                genre: true,
                image: true,
                phone: true,
                userId: true,
                user: true,
                followedTags: true,
                posts: true,
                address: true,
            },
        });

        return profile;
    }

    async findOneByUserId(id: number): Promise<TOmitProfile> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const profile: TOmitProfile = await prismaInstance.profile.findFirst({
            where: {
                userId: id,
            },
            select: {
                id: true,
                bio: true,
                genre: true,
                image: true,
                phone: true,
                userId: true,
                user: true,
                followedTags: true,
                posts: true,
                address: true,
            },
        });

        return profile;
    }

    async update(
        id: number,
        updateProfileDto: UpdateProfileDto,
    ): Promise<TOmitProfile> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const updatedProfile: TOmitProfile =
            await prismaInstance.profile.update({
                where: {
                    id: id,
                },
                data: {
                    bio: updateProfileDto.bio,
                    genre: updateProfileDto.genre,
                    image: updateProfileDto.image,
                    phone: updateProfileDto.phone,
                    userId: updateProfileDto.userId,
                    followedTags: {
                        connect: updateProfileDto.followedTags,
                    },
                },
                select: {
                    id: true,
                    bio: true,
                    genre: true,
                    image: true,
                    phone: true,
                    userId: true,
                    user: true,
                    followedTags: true,
                    posts: true,
                    address: true,
                },
            });

        return updatedProfile;
    }

    async remove(id: number): Promise<TOmitProfile> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const deletedProfile: TOmitProfile =
            await prismaInstance.profile.delete({
                where: {
                    id: id,
                },
                select: {
                    id: true,
                    bio: true,
                    genre: true,
                    image: true,
                    phone: true,
                    userId: true,
                    user: true,
                    followedTags: true,
                    posts: true,
                    address: true,
                },
            });

        return deletedProfile;
    }
}

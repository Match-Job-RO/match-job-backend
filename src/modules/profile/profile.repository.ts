import { Injectable } from "@nestjs/common";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import PrismaInstance from "src/shared/utils/prisma.client";
import { PrismaClient, Profile } from "@prisma/client";

@Injectable()
export class ProfileRepository {
    async create(createProfileDto: CreateProfileDto): Promise<Profile> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const createdProfile: Profile = await prismaInstance.profile.create({
            data: {
                bio: createProfileDto.bio,
                genre: createProfileDto.genre,
                image: createProfileDto.image,
                phone: createProfileDto.phone,
                userId: createProfileDto.userId,
            },
        });

        return createdProfile;
    }

    async findAll(): Promise<Profile[]> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const profiles: Profile[] = await prismaInstance.profile.findMany();

        return profiles;
    }

    async findOne(id: number): Promise<Profile> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const profile: Profile = await prismaInstance.profile.findUnique({
            where: {
                id: id,
            },
        });

        return profile;
    }

    async update(
        id: number,
        updateProfileDto: UpdateProfileDto,
    ): Promise<Profile> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const updatedProfile: Profile = await prismaInstance.profile.update({
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
        });

        return updatedProfile;
    }

    async remove(id: number): Promise<Profile> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const deletedProfile: Profile = await prismaInstance.profile.delete({
            where: {
                id: id,
            },
        });

        return deletedProfile;
    }
}

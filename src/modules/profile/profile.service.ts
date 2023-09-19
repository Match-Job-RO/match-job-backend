import { Injectable } from "@nestjs/common";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { ProfileRepository } from "./profile.repository";
import { Profile } from "@prisma/client";

@Injectable()
export class ProfileService {
    constructor(private readonly profileRepository: ProfileRepository) {}
    async create(createProfileDto: CreateProfileDto): Promise<Profile> {
        const createdProfile: Profile =
            await this.profileRepository.create(createProfileDto);
        return createdProfile;
    }

    async findAll(): Promise<Profile[]> {
        const allProfiles: Profile[] = await this.profileRepository.findAll();
        return allProfiles;
    }

    async findOne(id: number): Promise<Profile> {
        const profile: Profile = await this.profileRepository.findOne(id);

        return profile;
    }

    async update(
        id: number,
        updateProfileDto: UpdateProfileDto,
    ): Promise<Profile> {
        const updatedUser: Profile = await this.profileRepository.update(
            id,
            updateProfileDto,
        );
        return updatedUser;
    }

    async remove(id: number): Promise<Profile> {
        const deletedProfile: Profile = await this.profileRepository.remove(id);
        return deletedProfile;
    }
}

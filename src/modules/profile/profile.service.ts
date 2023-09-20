import { Injectable } from "@nestjs/common";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { ProfileRepository } from "./profile.repository";
import { TOmitProfile } from "src/shared/types/profile.type";

@Injectable()
export class ProfileService {
    constructor(private readonly profileRepository: ProfileRepository) {}
    async create(createProfileDto: CreateProfileDto): Promise<TOmitProfile> {
        const createdProfile: TOmitProfile =
            await this.profileRepository.create(createProfileDto);
        return createdProfile;
    }

    async findAll(): Promise<TOmitProfile[]> {
        const allProfiles: TOmitProfile[] =
            await this.profileRepository.findAll();
        return allProfiles;
    }

    async findOne(id: number): Promise<TOmitProfile> {
        const profile: TOmitProfile = await this.profileRepository.findOne(id);

        return profile;
    }

    async update(
        id: number,
        updateProfileDto: UpdateProfileDto,
    ): Promise<TOmitProfile> {
        const updatedProfile: TOmitProfile =
            await this.profileRepository.update(id, updateProfileDto);
        return updatedProfile;
    }

    async remove(id: number): Promise<TOmitProfile> {
        const deletedProfile: TOmitProfile =
            await this.profileRepository.remove(id);
        return deletedProfile;
    }
}

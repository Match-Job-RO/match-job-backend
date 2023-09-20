import { Module } from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { ProfileController } from "./profile.controller";
import { ProfileRepository } from "./profile.repository";
import { AuthModule } from "../auth/auth.module";

@Module({
    imports: [AuthModule],
    controllers: [ProfileController],
    providers: [ProfileService, ProfileRepository],
})
export class ProfileModule {}

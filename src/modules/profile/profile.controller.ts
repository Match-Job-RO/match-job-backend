import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
} from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { AuthGuard } from "../auth/auth.guard";

@Controller("profile")
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {
        return this.profileService.create(createProfileDto);
    }

    @UseGuards(AuthGuard)
    @Get()
    findAll() {
        return this.profileService.findAll();
    }

    @UseGuards(AuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.profileService.findOne(+id);
    }

    @UseGuards(AuthGuard)
    @Get("/user/:id")
    findOneByUserId(@Param("id") id: string) {
        return this.profileService.findOneByUserId(+id);
    }

    @UseGuards(AuthGuard)
    @Patch(":id")
    update(
        @Param("id") id: string,
        @Body() updateProfileDto: UpdateProfileDto,
    ) {
        return this.profileService.update(+id, updateProfileDto);
    }

    @UseGuards(AuthGuard)
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.profileService.remove(+id);
    }
}

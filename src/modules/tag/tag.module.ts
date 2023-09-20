import { Module } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TagController } from "./tag.controller";
import { TagService } from "./tag.service";
import { TagRepository } from "./tag.repository";

@Module({
    imports: [AuthModule],
    controllers: [TagController],
    providers: [TagService, TagRepository],
})
export class TagModule {}

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
import { AuthGuard } from "../auth/auth.guard";
import { TagService } from "./tag.service";
import { CreateTagDto } from "./dto/create-tag.dto";
import { UpdateTagDto } from "./dto/update-tag.dto";

@Controller("tag")
export class TagController {
    constructor(private readonly tagService: TagService) {}

    @Post()
    create(@Body() createTagDto: CreateTagDto) {
        return this.tagService.create(createTagDto);
    }

    @UseGuards(AuthGuard)
    @Get()
    findAll() {
        return this.tagService.findAll();
    }

    @UseGuards(AuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.tagService.findOne(+id);
    }

    @UseGuards(AuthGuard)
    @Patch(":id")
    update(@Param("id") id: string, @Body() updateTagDto: UpdateTagDto) {
        return this.tagService.update(+id, updateTagDto);
    }

    @UseGuards(AuthGuard)
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.tagService.remove(+id);
    }
}

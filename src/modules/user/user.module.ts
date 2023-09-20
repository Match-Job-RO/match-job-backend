import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { AuthModule } from "../auth/auth.module";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService, UserRepository],
})
export class UserModule {}

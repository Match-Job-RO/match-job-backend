import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/user/user.module";
import { ProfileModule } from "./modules/profile/profile.module";

@Module({
    imports: [UserModule, ProfileModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

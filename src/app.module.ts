import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/user/user.module";
import { ProfileModule } from "./modules/profile/profile.module";
import { AddressModule } from "./modules/address/address.module";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
    imports: [UserModule, ProfileModule, AddressModule, AuthModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

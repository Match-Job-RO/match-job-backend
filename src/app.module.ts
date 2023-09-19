import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/user/user.module";
import { ProfileModule } from "./modules/profile/profile.module";
import { AddressModule } from "./modules/address/address.module";

@Module({
    imports: [UserModule, ProfileModule, AddressModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

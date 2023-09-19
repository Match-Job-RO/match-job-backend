<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';

@Module({
  imports: [UserModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
=======
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
>>>>>>> 10c9df196a4e30a55607aa723441681ac580459d
})
export class AppModule {}

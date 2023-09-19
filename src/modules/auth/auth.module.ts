import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { LoginService } from "./auth.service";
import { LoginController } from "./auth.controller";
import { UserModule } from "../user/user.module";
import { jwtConstants } from "./constants";
import { AuthGuard } from "./auth.guard";

@Module({
    imports: [
        UserModule,
        AuthGuard,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secrets,
            signOptions: { expiresIn: "24h" },
        }),
    ],
    controllers: [LoginController],
    providers: [LoginService],
})
export class AuthModule {}

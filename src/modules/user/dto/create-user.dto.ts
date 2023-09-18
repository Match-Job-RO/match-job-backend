import { Profile } from "@prisma/client";

export class CreateUserDto {
    name: string;
    email: string;
    password: string;
    profiles?: Profile[];
    createdAt: Date;
    updatedAt: Date;
}

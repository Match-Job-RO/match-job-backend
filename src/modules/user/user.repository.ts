import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import PrismaInstance from "src/shared/utils/prisma.client";
import { PrismaClient, User } from "@prisma/client";

@Injectable()
export class UserRepository {
    async create(createUserDto: CreateUserDto): Promise<User> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const createdUser: User = await prismaInstance.user.create({
            data: {
                email: createUserDto.email,
                name: createUserDto.name,
                password: createUserDto.password,
            },
        });

        return createdUser;
    }

    async findAll(): Promise<User[]> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const users: User[] = await prismaInstance.user.findMany();

        return users;
    }

    async findOne(id: number): Promise<User> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const user: User = await prismaInstance.user.findUnique({
            where: {
                id: id,
            },
        });

        return user;
    }

    async findOneByEmail(email: string): Promise<User> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const user: User = await prismaInstance.user.findUnique({
            where: {
                email: email,
            },
        });

        return user;
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const updatedUser: User = await prismaInstance.user.update({
            where: {
                id: id,
            },
            data: {
                email: updateUserDto.email,
                name: updateUserDto.name,
                password: updateUserDto.password,
            },
        });

        return updatedUser;
    }

    async remove(id: number): Promise<User> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const deletedUser: User = await prismaInstance.user.delete({
            where: {
                id: id,
            },
        });

        return deletedUser;
    }
}

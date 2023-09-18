import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserRepository } from "./user.repository";
import { User } from "@prisma/client";
import { HashUtil } from "src/shared/utils/hash.util";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}
    async create(createUserDto: CreateUserDto): Promise<User> {
        const hashedPassword: string = await HashUtil.hashPassword(
            createUserDto.password,
        );
        createUserDto.password = hashedPassword;
        const createdUser: User =
            await this.userRepository.create(createUserDto);
        return createdUser;
    }

    async findAll(): Promise<User[]> {
        const allUser: User[] = await this.userRepository.findAll();
        return allUser;
    }

    async findOne(id: number): Promise<User> {
        const user: User = await this.userRepository.findOne(id);

        return user;
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        const updatedUser: User = await this.userRepository.update(
            id,
            updateUserDto,
        );
        return updatedUser;
    }

    async remove(id: number): Promise<User> {
        const deletedUser: User = await this.userRepository.remove(id);
        return deletedUser;
    }
}

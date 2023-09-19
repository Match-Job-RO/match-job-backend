import { Injectable } from "@nestjs/common";
import PrismaInstance from "src/shared/utils/prisma.client";
import { Address, PrismaClient } from "@prisma/client";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";

@Injectable()
export class AddressRepository {
    async create(createAddressDto: CreateAddressDto): Promise<Address> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const createdAddress: Address = await prismaInstance.address.create({
            data: {
                street: createAddressDto.street,
                number: createAddressDto.number,
                neighborhood: createAddressDto.neighborhood,
                postalCode: createAddressDto.postalCode,
                profileId: createAddressDto.profileId,
            },
        });

        return createdAddress;
    }

    async findAll(): Promise<Address[]> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const address: Address[] = await prismaInstance.address.findMany();

        return address;
    }

    async findOne(id: number): Promise<Address> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const address: Address = await prismaInstance.address.findUnique({
            where: {
                id: id,
            },
        });

        return address;
    }

    async update(
        id: number,
        updateAddressDto: UpdateAddressDto,
    ): Promise<Address> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const updatedAddress: Address = await prismaInstance.address.update({
            where: {
                id: id,
            },
            data: {
                street: updateAddressDto.street,
                number: updateAddressDto.number,
                neighborhood: updateAddressDto.neighborhood,
                postalCode: updateAddressDto.postalCode,
                profileId: updateAddressDto.profileId,
            },
        });

        return updatedAddress;
    }

    async remove(id: number): Promise<Address> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const deletedAddress: Address = await prismaInstance.address.delete({
            where: {
                id: id,
            },
        });

        return deletedAddress;
    }
}

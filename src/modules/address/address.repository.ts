import { Injectable } from "@nestjs/common";
import PrismaInstance from "src/shared/utils/prisma.client";
import { PrismaClient } from "@prisma/client";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";
import { TOmitAddress } from "src/shared/types/address.type";

@Injectable()
export class AddressRepository {
    async create(createAddressDto: CreateAddressDto): Promise<TOmitAddress> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const createdAddress: TOmitAddress =
            await prismaInstance.address.create({
                data: {
                    street: createAddressDto.street,
                    number: createAddressDto.number,
                    neighborhood: createAddressDto.neighborhood,
                    postalCode: createAddressDto.postalCode,
                    profileId: createAddressDto.profileId,
                },
                select: {
                    id: true,
                    street: true,
                    number: true,
                    neighborhood: true,
                    postalCode: true,
                    profileId: true,
                    profile: true,
                },
            });

        return createdAddress;
    }

    async findAll(): Promise<TOmitAddress[]> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const address: TOmitAddress[] = await prismaInstance.address.findMany({
            select: {
                id: true,
                street: true,
                number: true,
                neighborhood: true,
                postalCode: true,
                profileId: true,
                profile: true,
            },
        });

        return address;
    }

    async findOne(id: number): Promise<TOmitAddress> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const address: TOmitAddress = await prismaInstance.address.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                street: true,
                number: true,
                neighborhood: true,
                postalCode: true,
                profileId: true,
                profile: true,
            },
        });

        return address;
    }

    async update(
        id: number,
        updateAddressDto: UpdateAddressDto,
    ): Promise<TOmitAddress> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const updatedAddress: TOmitAddress =
            await prismaInstance.address.update({
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
                select: {
                    id: true,
                    street: true,
                    number: true,
                    neighborhood: true,
                    postalCode: true,
                    profileId: true,
                    profile: true,
                },
            });

        return updatedAddress;
    }

    async remove(id: number): Promise<TOmitAddress> {
        const prismaInstance: PrismaClient = PrismaInstance.getInstance();
        const deletedAddress: TOmitAddress =
            await prismaInstance.address.delete({
                where: {
                    id: id,
                },
                select: {
                    id: true,
                    street: true,
                    number: true,
                    neighborhood: true,
                    postalCode: true,
                    profileId: true,
                    profile: true,
                },
            });

        return deletedAddress;
    }
}

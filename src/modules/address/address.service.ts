import { Injectable } from "@nestjs/common";
import { Address } from "@prisma/client";
import { AddressRepository } from "./address.repository";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";

@Injectable()
export class AddressService {
    constructor(private readonly addressRepository: AddressRepository) {}
    async create(createAddressDto: CreateAddressDto): Promise<Address> {
        const createdAddress: Address =
            await this.addressRepository.create(createAddressDto);
        return createdAddress;
    }

    async findAll(): Promise<Address[]> {
        const allAddress: Address[] = await this.addressRepository.findAll();
        return allAddress;
    }

    async findOne(id: number): Promise<Address> {
        const address: Address = await this.addressRepository.findOne(id);

        return address;
    }

    async update(
        id: number,
        updateAddressDto: UpdateAddressDto,
    ): Promise<Address> {
        const updatedAddress: Address = await this.addressRepository.update(
            id,
            updateAddressDto,
        );
        return updatedAddress;
    }

    async remove(id: number): Promise<Address> {
        const deletedAddress: Address = await this.addressRepository.remove(id);
        return deletedAddress;
    }
}

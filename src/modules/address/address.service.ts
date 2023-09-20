import { Injectable } from "@nestjs/common";
import { AddressRepository } from "./address.repository";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";
import { TOmitAddress } from "src/shared/types/address.type";

@Injectable()
export class AddressService {
    constructor(private readonly addressRepository: AddressRepository) {}
    async create(createAddressDto: CreateAddressDto): Promise<TOmitAddress> {
        const createdAddress: TOmitAddress =
            await this.addressRepository.create(createAddressDto);
        return createdAddress;
    }

    async findAll(): Promise<TOmitAddress[]> {
        const allAddress: TOmitAddress[] =
            await this.addressRepository.findAll();
        return allAddress;
    }

    async findOne(id: number): Promise<TOmitAddress> {
        const address: TOmitAddress = await this.addressRepository.findOne(id);

        return address;
    }

    async update(
        id: number,
        updateAddressDto: UpdateAddressDto,
    ): Promise<TOmitAddress> {
        const updatedAddress: TOmitAddress =
            await this.addressRepository.update(id, updateAddressDto);
        return updatedAddress;
    }

    async remove(id: number): Promise<TOmitAddress> {
        const deletedAddress: TOmitAddress =
            await this.addressRepository.remove(id);
        return deletedAddress;
    }
}

import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateSellerInfoDto } from './create-seller-info.dto';

export class UpdateStoreDto extends PartialType(CreateSellerInfoDto) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  storeName: string[];
}
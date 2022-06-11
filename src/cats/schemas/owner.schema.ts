import { Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Owner {}

export const OwnerSchema = SchemaFactory.createForClass(Owner);

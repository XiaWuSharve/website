import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type BlogDocument = Blog & Document;

@Schema()
export class Blog {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  body: string;

  @Prop()
  author: string;

  @Prop()
  date_posted: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);

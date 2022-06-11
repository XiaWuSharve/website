import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';
import { Module } from '@nestjs/common';
import { Cats } from './cats';
import { Cat, CatSchema } from './schemas/cat.schema';

@Module({
  controllers: [CatsController],
  providers: [Cats],
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
})
export class CatsModule {}

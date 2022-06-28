import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';
import { Module } from '@nestjs/common';
import { Cats } from './cats';
import { User, UserSchema } from 'src/user/schema/user.schema';

@Module({
  controllers: [CatsController],
  providers: [Cats],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class CatsModule {}

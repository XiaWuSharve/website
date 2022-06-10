import { Photo } from './photo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Photo])],
  providers: [User, UsersService],
  controllers: [UsersController],
  exports: [TypeOrmModule],
})
export class UsersModule {}

import { LoggingInterceptor } from './logging.interceptor';
import { AuthGuard } from './auth.guard';
import { ParseErrorFilter } from './parse-error.filter';
import { CreateCatDto } from './dto/create.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseFilters,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { Cats } from './cats';
import { Roles } from './roles.decorator';
import { User } from './user.decorator';
import { Auth } from './auth.decorator';

@Controller('cats')
@UseGuards(AuthGuard)
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(private cats: Cats) {}

  @Get('users')
  @Auth('admin')
  findAllUsers() {
    return true;
  }

  @Get()
  async findAll(
    @User(new ValidationPipe({ validateCustomDecorators: true })) user,
  ): Promise<string> {
    return user;
  }

  @Post()
  @Roles('admin')
  async create(@Body(ValidationPipe) createCatDto: CreateCatDto) {
    this.cats.create(createCatDto);
    return `created a new cat named ${createCatDto.name}`;
  }

  @Get(':id')
  @UseFilters(ParseErrorFilter)
  async findOne(@Param('id') id: number): Promise<Cat> {
    console.log(id);
    return this.cats.findOne(id);
  }
}

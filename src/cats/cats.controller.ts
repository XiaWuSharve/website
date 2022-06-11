import { CreateCatDto } from './dto/create.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cats } from './cats';

@Controller('cats')
export class CatsController {
  constructor(private cats: Cats) {}

  @Get('users')
  findAllUsers() {
    return true;
  }

  @Get()
  async findAll() {
    return this.cats.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.cats.create(createCatDto);
    return `created a new cat named ${createCatDto.name}`;
  }

  // @Get(':id')
  // async findOne(@Param('id') id: number): Promise<Cat> {
  //   console.log(id);
  //   return this.cats.findOne(id);
  // }
}

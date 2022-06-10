import { FindAllDto } from './dto/find-all.dto';
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class Cats {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }
    
    findAll({activeOnly}: FindAllDto): Cat[] {
        if(activeOnly) return null;
        return this.cats;
    }

    findOne(id: number): Cat {
        return this.cats[id];
    }
}

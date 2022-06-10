import { Photo } from './photo.entity';

describe('PhotoEntity', () => {
  it('should be defined', () => {
    expect(new Photo()).toBeDefined();
  });
});

import { CreateCatDto } from './create.dto';

describe('CreateDto', () => {
  it('should be defined', () => {
    expect(new CreateCatDto()).toBeDefined();
  });
});

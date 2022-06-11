import { Owner } from './owner.schema';

describe('OwnerSchema', () => {
  it('should be defined', () => {
    expect(new Owner()).toBeDefined();
  });
});

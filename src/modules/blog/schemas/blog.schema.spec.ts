import { Blog } from './blog.schema';

describe('BlogSchema', () => {
  it('should be defined', () => {
    expect(new Blog()).toBeDefined();
  });
});

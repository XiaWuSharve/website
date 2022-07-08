import { ValidateObjectIdPipe } from './shared/pipes/validate-object-id.pipe';
import { CreatePostDto } from './dto/create-post.dto';
import { Blog } from './schemas/blog.schema';
import { BlogService } from './blog.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get()
  async getPosts(): Promise<Blog[]> {
    return this.blogService.getPosts();
  }

  @Get(':postId')
  async getPost(@Param('postId', ValidateObjectIdPipe) postId): Promise<Blog> {
    const post = await this.blogService.getPost(postId);
    if (!post) throw new NotFoundException('Post does not exist!');
    return post;
  }

  @Post()
  async addPost(@Body() createPostDto: CreatePostDto): Promise<Blog> {
    return this.blogService.addPost(createPostDto);
  }

  @Put()
  async editPost(
    @Query('postId', ValidateObjectIdPipe) postId,
    @Body() createPostDto: CreatePostDto,
  ): Promise<Blog> {
    const editedPost = this.blogService.editPost(postId, createPostDto);
    if (!editedPost) throw new NotFoundException('Post does not exist!');
    return editedPost;
  }

  @Delete()
  async deletePost(
    @Query('postId', ValidateObjectIdPipe) postId,
  ): Promise<Blog> {
    const deletedPost = this.blogService.deletePost(postId);
    if (!deletedPost) throw new NotFoundException('Post not exist!');
    return deletedPost;
  }
}

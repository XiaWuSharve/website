import { CreatePostDto } from './dto/create-post.dto';
import { Blog, BlogDocument } from './schemas/blog.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  async getPosts(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }

  async getPost(postId): Promise<Blog> {
    return this.blogModel.findById(postId).exec();
  }

  async addPost(createPostDto: CreatePostDto): Promise<Blog> {
    const newPost = await new this.blogModel(createPostDto);
    return newPost.save();
  }

  async editPost(postId, createPostDto: CreatePostDto): Promise<Blog> {
    return this.blogModel.findByIdAndUpdate(postId, createPostDto, {
      new: true,
    });
  }

  async deletePost(postId): Promise<any> {
    return this.blogModel.findByIdAndDelete(postId);
  }
}

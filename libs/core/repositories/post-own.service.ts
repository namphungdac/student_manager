import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostOwnEntity } from '@app/core/entity/entities/post-own.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostOwnService {
  constructor(
    @InjectRepository(PostOwnEntity)
    private readonly repository: Repository<PostOwnEntity>,
  ) {}

  async create(postOwn: PostOwnEntity) {
    return this.repository.save(postOwn);
  }
}

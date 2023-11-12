import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '@nx-library-api/data-accesss'
import { TodoCommand } from '@nx-library-api/data-accesss';
import { TodoController } from './todo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoCommand],
})
export class TodoModule {}
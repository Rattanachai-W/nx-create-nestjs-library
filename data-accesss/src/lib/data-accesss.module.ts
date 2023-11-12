import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entity/todo.entity';
import { TodoCommand } from './command/todo.command';

@Module({
  providers: [Todo, TodoCommand],
  exports: [Todo, TodoCommand],
})


export class DataAccesssModule {}

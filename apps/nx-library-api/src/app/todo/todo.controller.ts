// src/todo.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodoCommand } from '@nx-library-api/data-accesss';
import { Todo } from '@nx-library-api/data-accesss';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoCommand) {}

  @Get()
  findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  create(@Body() todo: Todo): Promise<Todo> {
     this.todoService.create(todo);
    return 
  }
}
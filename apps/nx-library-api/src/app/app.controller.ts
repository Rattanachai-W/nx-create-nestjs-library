import { Controller, Get } from '@nestjs/common';
import { TodoCommand } from '@nx-library-api/data-accesss'

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly todoCommand: TodoCommand

  ) { }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('test-lib')
   getDataTest () {
    const data =  this.todoCommand.findAll()
    return 'hi'
  }


}

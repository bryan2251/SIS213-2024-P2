import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { UpdateTypeTaskDto } from 'src/dto/update-type_task.dto';
import { CreateTypeTaskDto } from 'src/dto/create-type_task.dto';
import { Type_Task } from './type_task.entity';
import { TypeTaskService } from './type_task.service';

@Controller('type-task')
export class TypeTaskController {
  constructor(private typeTasksService: TypeTaskService) {}

  @Post('create')
  createTask(@Body() newTypeTask: CreateTypeTaskDto) {
    return this.typeTasksService.createTypeTask(newTypeTask);
  }

  @Get('getAll')
  getTasks(): Promise<Type_Task[]> {
    return this.typeTasksService.getTypeTasks();
  }

  @Get('getById/:id')
  getTask(@Param('id', ParseIntPipe) id: number) {
    return this.typeTasksService.getTypeTask(id);
  }

  @Delete('deleteById/:id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.typeTasksService.deleteTypeTask(id);
  }

  @Patch('updateById/:id')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() type_task: UpdateTypeTaskDto,
  ) {
    return this.typeTasksService.updateTask(id, type_task);
  }
}

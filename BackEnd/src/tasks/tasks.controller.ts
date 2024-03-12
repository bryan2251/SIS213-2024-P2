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
import { TasksService } from './tasks.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { Task } from './tasks.entity';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post('create')
  createTask(@Body() newTask: CreateTaskDto) {
    return this.tasksService.createTask(newTask);
  }

  @Get('getAll')
  getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Get('getByIdState/:id')
  getTask(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.getTasksByState(id);
  }

  @Get('getById/:id')
  getTaskByState(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.getTask(id);
  }

  @Delete('deleteById/:id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.deleteTask(id);
  }

  @Patch('updateById/:id')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() task: UpdateTaskDto,
  ) {
    return this.tasksService.updateTask(id, task);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UpdateStateTaskDto } from 'src/dto/update-state_task.dto';
import { CreateStateTaskDto } from 'src/dto/create-state_task.dto';
import { State_Task } from './state_task.entity';
import { StateTaskService } from './state_task.service';

@Controller('state-task')
export class StateTaskController {
  constructor(private stateTasksService: StateTaskService) {}

  @Post('create')
  createStateTask(@Body() newStateTask: CreateStateTaskDto) {
    return this.stateTasksService.createStateTask(newStateTask);
  }

  @Get('getAll')
  getStateTasks(): Promise<State_Task[]> {
    return this.stateTasksService.getStateTasks();
  }

  @Get('getById/:id')
  getStateTask(@Param('id', ParseIntPipe) id: number) {
    return this.stateTasksService.getStateTask(id);
  }

  @Delete('deleteById/:id')
  deleteStateTask(@Param('id', ParseIntPipe) id: number) {
    return this.stateTasksService.deleteStateTask(id);
  }

  @Patch('updateById/:id')
  updateStateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() state_task: UpdateStateTaskDto,
  ) {
    return this.stateTasksService.updateStateTask(id, state_task);
  }
}

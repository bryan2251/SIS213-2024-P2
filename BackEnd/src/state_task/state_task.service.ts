import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State_Task } from './state_task.entity';
import { CreateStateTaskDto } from 'src/dto/create-state_task.dto';
import { UpdateStateTaskDto } from 'src/dto/update-state_task.dto';

@Injectable()
export class StateTaskService {
  constructor(
    @InjectRepository(State_Task)
    private stateTaskRepository: Repository<State_Task>,
  ) {}

  getStateTasks() {
    return this.stateTaskRepository.find();
  }

  async getStateTask(id: number) {
    const stateTaskFound = await this.stateTaskRepository.findOne({
      where: {
        id,
      },
    });

    if (!stateTaskFound) {
      throw new HttpException(
        'Estado de tarea no existente',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.stateTaskRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createStateTask(state_task: CreateStateTaskDto) {
    const stateTaskFound = await this.stateTaskRepository.findOne({
      where: {
        descripcion: state_task.descripcion,
      },
    });

    if (stateTaskFound) {
      throw new HttpException('Estado de tarea ya existe', HttpStatus.CREATED);
    }
    const newTask = this.stateTaskRepository.create(state_task);
    return this.stateTaskRepository.save(newTask);
  }

  async deleteStateTask(id: number) {
    const result = await this.stateTaskRepository.delete({ id });
    if (result.affected == 0) {
      throw new HttpException(
        'Estado de tarea no existente',
        HttpStatus.NOT_FOUND,
      );
    }
    return result;
  }

  async updateStateTask(id: number, state_task: UpdateStateTaskDto) {
    const taskFound = await this.stateTaskRepository.findOne({
      where: {
        id,
      },
    });
    if (!taskFound) {
      throw new HttpException(
        'Estado de tarea no existente',
        HttpStatus.NOT_FOUND,
      );
    }
    const updateTask = Object.assign(taskFound, state_task);
    return this.stateTaskRepository.save(updateTask);
  }
}

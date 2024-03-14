import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './tasks.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { StateTaskService } from 'src/state_task/state_task.service';
import { TypeTaskService } from 'src/type_task/type_task.service';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
    private stateTaskService: StateTaskService,
    private typeTaskService: TypeTaskService,
  ) {}

  async createTask(task: CreateTaskDto) {
    const stateTaskFound = await this.stateTaskService.getStateTask(
      task.id_estado,
    );
    const typeTaskFound = await this.typeTaskService.getTypeTask(task.id_tipo);

    if (!stateTaskFound) {
      throw new HttpException(
        'Estado de tarea no existente',
        HttpStatus.NOT_FOUND,
      );
    }

    if (!typeTaskFound) {
      throw new HttpException(
        'Tipo de tarea no existente',
        HttpStatus.NOT_FOUND,
      );
    }
    const newTask = this.taskRepository.create({
      ...task,
      estado_tarea: stateTaskFound,
      tipo_tarea: typeTaskFound,
    });
    const savedTask = await this.taskRepository.save(newTask);
    console.log('Tarea guardada con éxito:', savedTask);
    return savedTask;
  }

  getTasks() {
    return this.taskRepository.find({
      relations: ['estado_tarea', 'tipo_tarea'],
    });
  }

  getTasksByState(id_estado: number) {
    return this.taskRepository.find({
      where: {
        estado_tarea: { id: id_estado },
      },
      relations: ['estado_tarea', 'tipo_tarea'],
    });
  }

  async getTask(id: number) {
    const taskFound = await this.taskRepository.findOne({
      where: {
        id,
      },
      relations: ['estado_tarea', 'tipo_tarea'],
    });

    if (!taskFound) {
      throw new HttpException('Tarea no existente', HttpStatus.NOT_FOUND);
    }

    return taskFound;
  }

  async deleteTask(id: number) {
    const result = await this.taskRepository.delete({ id });
    if (result.affected == 0) {
      throw new HttpException('Tarea no existente', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  async updateTask(id: number, task: UpdateTaskDto) {
    const stateTaskFound = this.stateTaskService.getStateTask(task.id_estado);
    const typeTaskFound = this.typeTaskService.getTypeTask(task.id_tipo);

    if (!stateTaskFound) {
      throw new HttpException(
        'Estado de tarea no existente',
        HttpStatus.NOT_FOUND,
      );
    }

    if (!typeTaskFound) {
      throw new HttpException(
        'Tipo de tarea no existente',
        HttpStatus.NOT_FOUND,
      );
    }

    const taskFound = await this.taskRepository.findOne({
      where: {
        id,
      },
    });
    if (!taskFound) {
      throw new HttpException('Tarea no existente', HttpStatus.NOT_FOUND);
    }

    const updateTask = Object.assign(taskFound, {
      ...task,
      id_estado: (await stateTaskFound).id,
      id_tipo: (await typeTaskFound).id,
    });

    return this.taskRepository.save(updateTask);
  }
}

import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Type_Task } from './type_task.entity';
import { Repository } from 'typeorm';
import { CreateTypeTaskDto } from 'src/dto/create-type_task.dto';
import { UpdateTypeTaskDto } from 'src/dto/update-type_task.dto';

@Injectable()
export class TypeTaskService {
  constructor(
    @InjectRepository(Type_Task)
    private typeTaskRepository: Repository<Type_Task>,
  ) {}

  getTypeTasks() {
    return this.typeTaskRepository.find();
  }

  async getTypeTask(id: number) {
    const typeTaskFound = await this.typeTaskRepository.findOne({
      where: {
        id,
      },
    });

    if (!typeTaskFound) {
      throw new HttpException(
        'Tipo de tarea no existente',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.typeTaskRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createTypeTask(type_task: CreateTypeTaskDto) {
    const typeTaskFound = await this.typeTaskRepository.findOne({
      where: {
        descripcion: type_task.descripcion,
      },
    });

    if (typeTaskFound) {
      throw new HttpException('Tipo de tarea ya existe', HttpStatus.CREATED);
    }
    const newTask = this.typeTaskRepository.create(type_task);
    return this.typeTaskRepository.save(newTask);
  }

  async deleteTypeTask(id: number) {
    const result = await this.typeTaskRepository.delete({ id });
    if (result.affected == 0) {
      throw new HttpException(
        'Tipo de tarea no existente',
        HttpStatus.NOT_FOUND,
      );
    }
    return result;
  }

  async updateTask(id: number, type_task: UpdateTypeTaskDto) {
    const taskFound = await this.typeTaskRepository.findOne({
      where: {
        id,
      },
    });
    if (!taskFound) {
      throw new HttpException(
        'Tipo de tarea no existente',
        HttpStatus.NOT_FOUND,
      );
    }
    const updateTask = Object.assign(taskFound, type_task);
    return this.typeTaskRepository.save(updateTask);
  }
}

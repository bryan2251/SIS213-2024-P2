import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks.entity';
import { StateTaskModule } from 'src/state_task/state_task.module';
import { TypeTaskModule } from 'src/type_task/type_task.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), StateTaskModule, TypeTaskModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}

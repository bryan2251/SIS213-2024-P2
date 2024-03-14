import { Module } from '@nestjs/common';
import { StateTaskService } from './state_task.service';
import { StateTaskController } from './state_task.controller';
import { State_Task } from './state_task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([State_Task])],
  providers: [StateTaskService],
  controllers: [StateTaskController],
  exports: [StateTaskService],
})
export class StateTaskModule {}

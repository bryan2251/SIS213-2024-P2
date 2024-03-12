import { Module } from '@nestjs/common';
import { TypeTaskService } from './type_task.service';
import { TypeTaskController } from './type_task.controller';
import { Type_Task } from './type_task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Type_Task])],
  providers: [TypeTaskService],
  controllers: [TypeTaskController],
  exports: [TypeTaskService],
})
export class TypeTaskModule {}

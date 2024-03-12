import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeTaskModule } from './type_task/type_task.module';
import { StateTaskModule } from './state_task/state_task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tareas_universitarias',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    TasksModule,
    TypeTaskModule,
    StateTaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

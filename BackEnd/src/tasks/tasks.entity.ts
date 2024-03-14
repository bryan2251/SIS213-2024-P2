import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Type_Task } from 'src/type_task/type_task.entity';
import { State_Task } from 'src/state_task/state_task.entity';

export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  PAUSED = 'PAUSED',
}

@Entity({ name: 'tareas' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column({
    type: 'datetime',
  })
  inicio: Date;

  @Column({
    nullable: true,
  })
  limite: Date;

  @ManyToOne(() => State_Task, (state_task) => state_task.tasks)
  @JoinColumn({ name: 'id_estado' })
  estado_tarea: State_Task;

  @ManyToOne(() => Type_Task, (type_task) => type_task.tasks)
  @JoinColumn({ name: 'id_tipo' })
  tipo_tarea: Type_Task;
}

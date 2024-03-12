import { Task } from 'src/tasks/tasks.entity';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'estado' })
export class State_Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  descripcion: string;

  @OneToMany(() => Task, (task) => task.estado_tarea)
  tasks: Task[];
}

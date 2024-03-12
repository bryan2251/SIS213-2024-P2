import { Task } from 'src/tasks/tasks.entity';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'tipo_tarea' })
export class Type_Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  descripcion: string;

  @OneToMany(() => Task, (task) => task.tipo_tarea)
  tasks: Task[];
}

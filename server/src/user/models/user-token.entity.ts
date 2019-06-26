import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserToken {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @Column()
  validTo: Date;

  @ManyToOne(type => User, user => user.tokens)
  user: User;
}

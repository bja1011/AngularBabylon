import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Unique, ManyToOne } from 'typeorm';
import { UserToken } from './user-token.entity';

@Entity()
@Unique(['username'])
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 256, nullable: true})
  username: string;

  @Column({length: 256, nullable: true})
  password: string;

  @OneToMany(type => UserToken, userToken => userToken.user)
  tokens: UserToken[];
}

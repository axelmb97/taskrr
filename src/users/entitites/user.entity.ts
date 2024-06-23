import { BaseEntity } from "src/core/entitites/base.entity";
import { IUser } from "src/core/interfaces/user.interface";
import { Column, Entity } from "typeorm";
@Entity({name:'users'})
export class UserEntity extends BaseEntity implements IUser {
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  age: number;
  @Column()
  email: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  role: string;

}
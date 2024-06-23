import { ROLE } from "src/core/constants/roles";
import { BaseEntity } from "src/core/entitites/base.entity";
import { IUser } from "src/core/interfaces/user.interface";
import { ProjectEntity } from "src/projects/entitites/project.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { UserProjectEntity } from "./user_project.entity";

@Entity({name:'users'})
export class UserEntity extends BaseEntity implements IUser {
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  age: number;
  @Column({unique:true})
  email: string;
  @Column({unique:true})
  username: string;
  @Column()
  password: string;
  @Column({type:'enum', enum: ROLE})
  role: ROLE;
  @OneToMany(() => UserProjectEntity, (userProject) => userProject.user)
  projectsIncluded: UserProjectEntity[];
}
import { BaseEntity } from "src/core/entitites/base.entity";
import { IProject } from "src/core/interfaces/project.interface";
import { UserEntity } from "src/users/entitites/user.entity";
import { UserProjectEntity } from "src/users/entitites/user_project.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity({name:'projects'})
export class ProjectEntity extends BaseEntity implements IProject{
  @Column()
  name: string;
  @Column()
  description: string;
  @OneToMany(() => UserProjectEntity, (userProject) => userProject.project)
  usersIncluded: UserProjectEntity[];
}
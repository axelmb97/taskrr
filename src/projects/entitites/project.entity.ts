import { BaseEntity } from "../../core/entitites/base.entity";
import { IProject } from "../../core/interfaces/project.interface";

import { UserProjectEntity } from "../../users/entitites/user_project.entity";
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
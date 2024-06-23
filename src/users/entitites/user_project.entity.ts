import { ACCESS_LEVEL } from "src/core/constants/roles";
import { BaseEntity } from "src/core/entitites/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { UserEntity } from "./user.entity";
import { ProjectEntity } from "src/projects/entitites/project.entity";

@Entity({name: 'users_projects'})
export class UserProjectEntity extends BaseEntity {
  @Column({type: 'enum', enum: ACCESS_LEVEL})
  accessLevel: ACCESS_LEVEL;
  @ManyToOne(() => UserEntity, (user) => user.projectsIncluded)
  user: UserEntity;
  @ManyToOne(() => ProjectEntity, (project) => project.usersIncluded)
  project: ProjectEntity;
}
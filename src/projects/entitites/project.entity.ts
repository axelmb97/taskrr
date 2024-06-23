import { BaseEntity } from "src/core/entitites/base.entity";
import { IProject } from "src/core/interfaces/project.interface";
import { Column, Entity } from "typeorm";

@Entity({name:'projects'})
export class ProjectEntity extends BaseEntity implements IProject{
  @Column()
  name: string;
  @Column()
  description: string;
}
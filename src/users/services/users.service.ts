import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entitites/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UpdateUserDTO, UserDTO } from '../dto/user.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity) private readonly usersRepository: Repository<UserEntity>
  ){}

  public async createUser(user: UserDTO) : Promise<UserEntity> {
    try {
      return await this.usersRepository.save(user);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getAllUsers() : Promise<UserEntity[]> {
    try {
      return await this.usersRepository.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getUserById(id:string) : Promise<UserEntity> {
    try {
      return await this.usersRepository.createQueryBuilder('user').where({id}).getOne();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async updateUser(user:UpdateUserDTO, id:string) : Promise<UpdateResult | undefined> {
    try {
      const userUpdated: UpdateResult = await this.usersRepository.update(id, user);
      return userUpdated.affected === 0 ? undefined : userUpdated;
    } catch (error) {
      throw new Error(error);
    }
  }

  
  public async deleteUser(id:string) : Promise<DeleteResult | undefined> {
    try {
      const userDeleted: DeleteResult = await this.usersRepository.delete(id);
      return userDeleted.affected === 0 ? undefined : userDeleted;
    } catch (error) {
      throw new Error(error);
    }
  }
}

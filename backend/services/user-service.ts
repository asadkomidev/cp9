import { UserDTO } from "../dtos/user-dto";
import { IUserRepository } from "../repositories";

export class UserService {
  constructor(private _userRepo: IUserRepository) {}

  async createUser(user: UserDTO): Promise<UserDTO> {
    return await this._userRepo.createUser(user);
  }

  async updateUser(user: Partial<UserDTO>, id: string): Promise<UserDTO> {
    return await this._userRepo.updateUser(user, id);
  }

  async deleteUser(id: string): Promise<UserDTO> {
    return await this._userRepo.deleteUser(id);
  }

  async getUser(userId: string): Promise<UserDTO> {
    return await this._userRepo.getUser(userId);
  }

  async getUsers(): Promise<UserDTO[]> {
    return await this._userRepo.getUsers();
  }

  async updateCount(userId: string, count: number): Promise<UserDTO> {
    return await this._userRepo.updateCount(userId, count);
  }
}

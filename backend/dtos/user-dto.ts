import { UserType } from "../utilities/types";

export class UserDTO {
  private _id: number;
  private _userId: string;
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _count: number;
  private _createdAt: Date;
  constructor({
    id,
    userId,
    firstName,
    lastName,
    email,
    count,
    createdAt,
  }: {
    id: number;
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    count: number;
    createdAt: Date;
  }) {
    this._id = id;
    this._userId = userId;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._count = count;
    this._createdAt = createdAt;
  }

  public get id(): number {
    return this._id;
  }

  public get userId(): string {
    return this._userId;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public get email(): string {
    return this._email;
  }

  public get count(): number {
    return this._count;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  static response(data: UserType): UserDTO {
    const createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
    return new UserDTO({
      id: data.id,
      userId: data.userId,
      firstName: data.firstName,
      lastName: data.lastName || "",
      email: data.email,
      count: data.count || 0,
      createdAt,
    });
  }
}

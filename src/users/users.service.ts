import { User } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  async findOne(email: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  update(userId: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      data: updateUserDto,
      where: { userId },
    });
  }

  remove(email: string) {
    return this.prisma.user.delete({ where: { email } });
  }
}

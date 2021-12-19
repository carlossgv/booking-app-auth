import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

const prisma = new PrismaClient();

const users: CreateUserDto[] = [
  {
    email: 'test@test.com',
    password: 'test',
    firstName: 'Test',
    lastName: 'Man',
  },
  {
    email: 'carlos@carlos.com',
    password: 'carlos',
    firstName: 'Carlos',
    lastName: 'Gonzalez',
  },
  {
    email: 'inactive@inactive.com',
    password: 'inactive',
    firstName: 'Inactive',
    lastName: 'User',
    isActive: false,
  },
];

const main = async () => {
  users.forEach(async (user) => {
    await prisma.user.create({
      data: user,
    });
  });
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });

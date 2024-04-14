import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-unused-vars, no-var
  var prisma: PrismaClient; // This must be a `var` and not a `let / const`
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}

export default prisma;

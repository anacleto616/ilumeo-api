import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const rafael = prisma.employee.create({
    data: {
      name: 'Rafael',
      employee_code: 'ABCD123'
    }
  });

  const beatriz = prisma.employee.create({
    data: {
      name: 'Beatriz',
      employee_code: 'EFGH456'
    }
  });

  const marcus = prisma.employee.create({
    data: {
      name: 'Marcus',
      employee_code: 'IJKL789'
    }
  });

  const rafaelPointControl = await prisma.employeePointControlHistory.createMany({
    data: [
      {
        employeeId: (await rafael).id,
        day_worked: '2023-02-20T12:00:00.637Z',
        worked_hours: 480,
      },
      {
        employeeId: (await rafael).id,
        day_worked: '2023-02-21T12:00:00.637Z',
        worked_hours: 480,
      },
      {
        employeeId: (await beatriz).id,
        day_worked: '2023-02-20T12:00:00.637Z',
        worked_hours: 480,
      },
      {
        employeeId: (await beatriz).id,
        day_worked: '2023-02-21T12:00:00.637Z',
        worked_hours: 480,
      },
      {
        employeeId: (await marcus).id,
        day_worked: '2023-02-20T12:00:00.637Z',
        worked_hours: 480,
      },
      {
        employeeId: (await marcus).id,
        day_worked: '2023-02-21T12:00:00.637Z',
        worked_hours: 480,
      },
    ]
  });

  console.log({ rafael, beatriz, marcus });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

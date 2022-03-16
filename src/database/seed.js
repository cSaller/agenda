import prisma from './prisma'

import { encryptPassword } from 'helpers'

async function seed() {
  await prisma.user.upsert({
    where: { email: 'admin@email.com' },
    update: {},
    create: {
      email: 'admin@email.com',
      password: await encryptPassword('superpassword'),
      name: 'Admin',
      birthDate: '2000-01-01T12:00:00+00:00',
      phone: '+5553912345678',
      isAdmin: true,
      cpf: '1234567890',
      address: {
        address1: 'Rua 1',
        address2: '',
        address3: '',
        number: 10,
        cep: '12345678',
        alias: 'Casa'
      }
    }
  })
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
          email: 'frostwrld99922@gmail.com',
          password: 'test123',
          username: 'frost7',
          createdAt: Date.now()
        },
      })

      const allUsers = await prisma.user.findMany({})
      console.log(allUsers)
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
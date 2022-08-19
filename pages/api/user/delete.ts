import {PrismaClient} from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function deleteUser(req: NextApiRequest, res: NextApiResponse)
  {
    const {id} = req.body
    try {
      await prisma.user.delete({
        where: {
          id: id
        },
    })
      res.status(200).send({ message: 'User deleted successfully' })
  } catch (error) {
    console.log(error);
  }
}
import {PrismaClient} from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function updateUser(req: NextApiRequest, res: NextApiResponse)
  {
    const {id,username,useremail} = req.body
    try {
      await prisma.user.update({
        where: {
          id: id
        },
        data: {
          id,
          username,    
          useremail,
      }
    })
      res.status(200).send({ message: 'User updated successfully' })
  } catch (error) {
    console.log(error);
  }
}
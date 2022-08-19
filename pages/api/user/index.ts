import {PrismaClient} from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function getUsers(req: NextApiRequest, res: NextApiResponse)
{
  try {
    const users = await prisma.user.findMany()
      res.status(200).json(users)
  } catch (error) {
    console.log(error);
  }
}
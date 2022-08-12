import {PrismaClient} from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function getFeedback(req: NextApiRequest, res: NextApiResponse)
{
  try {
    const feedback = await prisma.feedback.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      }
    })
      res.status(200).json({ feedback })
  } catch (error) {
    console.log(error);
  }
}
import {PrismaClient} from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function createFeedback(req: NextApiRequest, res: NextApiResponse)
  {
    const {id, pubdate,name,email} = req.body
    console.log(req.method);
    try {
      await prisma.feedback.create({
      data: {
        id,
        pubdate, 
        name,    
        email,
      }
    })
      res.status(200).send({ message: 'Feedback created successfully' })
  } catch (error) {
    console.log(error);
  }
}
import {PrismaClient} from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function createProducts(req: NextApiRequest, res: NextApiResponse)
  {
    const {name,price,categoryId} = req.body
    try {
      await prisma.products.create({
      data: {
        name,
        price,
        categoryId,
      }
    })
      res.status(200).send({ message: 'Product created successfully' })
  } catch (error) {
    console.log(error);
  }
}
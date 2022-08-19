import {PrismaClient} from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function updateProduct(req: NextApiRequest, res: NextApiResponse)
  {
    const {id, name,price,categoryId} = req.body
    try {
      await prisma.products.update({
        where: {
          id: id
        },
        data: {
          id,
          name,
          price,
          categoryId
      }
    })
      res.status(200).send({ message: 'Product updated successfully' })
  } catch (error) {
    console.log(error);
  }
}
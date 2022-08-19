import {PrismaClient} from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function deleteProduct(req: NextApiRequest, res: NextApiResponse)
  {
    const {id} = req.body
    try {
      await prisma.products.delete({
        where: {
          id: id
        },
    })
      res.status(200).send({ message: 'Product deleted successfully' })
  } catch (error) {
    console.log(error);
  }
}
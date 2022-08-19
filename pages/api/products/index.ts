import {PrismaClient} from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function getProducts(req: NextApiRequest, res: NextApiResponse)
{
  try {
    const products = await prisma.products.findMany({
      include: {
        category: true,
      }
    })
      res.status(200).json(products)
  } catch (error) {
    console.log(error);
  }
}
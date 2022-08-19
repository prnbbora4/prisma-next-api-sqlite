import {PrismaClient} from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function getProducts(req: NextApiRequest, res: NextApiResponse)
{
  try {
    // const {id} = req.query
    // const uid = parseInt(id as string)

    const {id} = req.body

    const product = await prisma.products.findUnique({
      where: {
        id: id
      },
      include: {
        category: true,
      }
    })
      res.status(200).json(product)
  } catch (error) {
    console.log(error);
  }
}
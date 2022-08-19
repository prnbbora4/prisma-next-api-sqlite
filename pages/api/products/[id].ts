import {PrismaClient} from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function getUniqueProducts(req: NextApiRequest, res: NextApiResponse)
{
  try {
    const {id} = req.query
    // console.log("id", id);    
    const uid = parseInt(id as string)

    const product = await prisma.products.findUnique({
      where: {
        id: uid
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
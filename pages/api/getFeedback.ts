import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function getFeedback(req : any, res: any){
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
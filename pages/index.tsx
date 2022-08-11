import React from 'react'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function getServerSideProps(){
  const feedback = await prisma.feedback.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    }
  })
  return { 
    props: { 
      feedback : feedback
    } 
  }
}

const Index = ({feedback}: any) => {
  console.log("feedback",feedback);
  
  return (
    <div>index</div>
  )
}

export default Index
import React from 'react'

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function getServerSideProps(context: any) {
  const id = context.params.id
  const feedbackUnique = await prisma.feedback.findUnique({
    select: {
      id: true,
      name: true,
      email: true,
    },
    where: {
      id
    },
  })
  return { 
    props: { 
      feedbackUnique : feedbackUnique
    } 
  }
}



const SingleFeedback = ({feedbackUnique}: any) => {

  console.log("feedbackUnique",feedbackUnique);
  
  return (
    <div>[id]</div>
  )
}

export default SingleFeedback



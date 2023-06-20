import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end() // 405 - Method not allowed
  }

  const { name, username } = req.body

  const userExits = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (userExits) {
    return res.status(400).json({ message: 'Username already exists' })
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })
  return res.status(201).json(user)
}

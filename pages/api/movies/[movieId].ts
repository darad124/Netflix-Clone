import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverauth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    await serverAuth(req, res);

    const { movieId } = req.query;

    if (typeof movieId !== 'string') {
      throw new Error('Invalid Id');
    }

    if (!movieId) {
      throw new Error('Missing Id');
    }

    // Log the value of movieId
    console.log('movieId:', movieId);

    // Validate that movieId is a valid ObjectID
    if (!/^[0-9a-fA-F]{24}$/.test(movieId)) {
      throw new Error('Invalid ObjectID');
    }

    const movies = await prismadb.movie.findUnique({
      where: {
        id: movieId
      }
    });

    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
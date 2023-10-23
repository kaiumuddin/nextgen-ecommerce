import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import connectMongoDB from '@/libs/mongodb';

export async function GET(req: NextRequest) {
  await connectMongoDB();

  console.log(req.url, 'Success');

  return NextResponse.json({ messgae: 'Successfull' });
}

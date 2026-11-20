import { NextResponse } from 'next/server'; import { getProfile } from '@/lib/content';
export async function GET(){return NextResponse.json(await getProfile());}

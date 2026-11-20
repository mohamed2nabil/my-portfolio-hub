import { NextResponse } from 'next/server';
// Authorization is enforced by every server page and mutation endpoint, not here.
export function proxy() { return NextResponse.next(); }
export const config = { matcher: ['/admin/:path*'] };

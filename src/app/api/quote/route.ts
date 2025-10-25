import { NextResponse } from 'next/server';
import { getRandomQuote } from '../../../lib/quotes';

export async function GET() {
  return NextResponse.json({
    quote: getRandomQuote(),
    timestamp: new Date().toISOString()
  });
}
import { NextResponse } from 'next/server';
import { products } from '../products';


export async function GET() {
  try {
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ message: "Failed to load products" }, { status: 500 });
  }
}
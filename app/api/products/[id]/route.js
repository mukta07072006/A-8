import { NextResponse } from 'next/server';
import { products } from '../../products'; 

export async function GET(request, { params }) {
  // Await params if you are on Next.js 15
  const { id } = await params;
  
  const product = products.find((p) => p.id === Number(id));

  if (product) {
    return NextResponse.json(product);
  }

  return NextResponse.json({ error: "Product not found" }, { status: 404 });
}
import prisma from '@/app/libs/Prisma';
import { NextResponse, NextRequest } from 'next/server';
import { supabase } from '@/app/libs/supabaseClient';

export async function POST(req){
  try {
    const { title, description, category, price, image } = await req.json();

    console.log(title)

    // Insert product data into Prisma database
    const newProduct = await prisma.products.create({
      data: {
        title,
        description,
        category,
        price,
        url: image, // Assuming the image URL is stored in the 'imageUrl' field
      },
    });

    // You can perform additional actions here, if needed

    return NextResponse.json({ message: 'Product added successfully', data: newProduct });
  } catch (error) {
    console.error('Error adding product:', error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
};

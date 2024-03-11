const multer = require('multer');
import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";

const upload = multer({ dest: 'uploads/' }); // Configure Multer for image storage

export async function POST(req, res) {
    try {
      // Extract product data from request body
      const body = req.body;

      console.log(body);

      // Handle image upload using Multer
      let imageUrl;
      if (req.file) {
        imageUrl = `uploads/${req.file.filename}`;
      }

      const newProduct = await prisma.products.create({
        data: {
          title,
          description,
          price: parseInt(price),
          image: imageUrl,
        },
      });

      return NextResponse.json({ message: 'Product created successfully!', product: newProduct });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error creating product!', error }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema"
import BlogModel from '@/database/blogSchema';
import mongoose from 'mongoose';

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
	await connectDB();
	const { slug } = await params;

	try {
		const blog = await blogSchema.findOne({ slug }).orFail();
		return NextResponse.json(blog)
	} catch (err) {
		console.log(err)
		return NextResponse.json('Blog Not Found', { status: 404 })
	}
}

export async function POST(
	req: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
  await connectDB();
  const { slug } = await params;

  try {
    const body = await req.json();

    if (!body.user || !body.comment) {
      return NextResponse.json(
        { error: "User and Comment fields are required" },
        { status: 400 }
      );
    }

    const newComment = {
      user: body.user,
      comment: body.comment,
      time: new Date(),
    };
    const blog = await blogSchema.findOneAndUpdate(
      { slug },
      { $push: { comments: newComment } },
      { new: true }
    ).orFail();

    return NextResponse.json(blog, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Blog Not Found or Failed to Add Comment" },
      { status: 404 }
    );
  }
}

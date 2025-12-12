import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema"
import BlogModel from '@/database/blogSchema';
import mongoose from 'mongoose';

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
	const { slug } = await params;
	await connectDB();

	try {
		const blog = await blogSchema.findOne({ slug }).orFail();
		return NextResponse.json(blog)
	} catch (err) {
		console.log(err)
		return NextResponse.json('Not found.', { status: 404 })
	}
}

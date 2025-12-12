import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db";
import projectSchema from "@/database/projectSchema"

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
	const { slug } = await params;
	await connectDB();

	try {
		const project = await projectSchema.findOne({ slug }).orFail()
		return NextResponse.json(project)
	} catch (err) {
		return NextResponse.json('Project not found.', { status: 404 })
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

	const newComment = {
	  user: body.user,
	  comment: body.comment,
	  time: new Date(),
	};
	
	const project = await projectSchema.findOneAndUpdate(
	  { slug },
	  { $push: { comments: newComment } },
	  { new: true }
	).orFail();

	return NextResponse.json(project, { status: 201 });
  } catch (err) {
	return NextResponse.json(
	  { error: "Blog Not Found or Failed to Add Comment" },
	  { status: 404 }
	);
  }
}

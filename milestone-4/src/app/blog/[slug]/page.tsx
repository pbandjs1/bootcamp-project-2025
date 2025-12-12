/* eslint-disable @typescript-eslint/no-explicit-any */
import style from "./blogPage.module.css";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Comment from "@/components/comment";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getBlog(slug: string) {
  await connectDB();

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    return blog;
  } catch (err) {
    return null;
  }
}

export default async function Blog({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <div className={style.blogContainer}>
        <div className={style.blogPost}>
          <h1 className={style.blogTextH1}>
            <strong>{blog.title}</strong>
          </h1>
          <div className={style.imageContainer}>
            <Image
              src={blog.image}
              alt={blog.image_alt || "image"}
              width={500}
              height={500}
            />
          </div>
          <div className={style.blogTextP}>
            <h2>
              <strong>
                {blog.date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </strong>
            </h2>
            <p>{blog.description}</p>
          </div>
        </div>
        <div className={style.commentContainer}>
          {blog.comments ? blog.comments.map((comment: any, index: number) => (
            <Comment key={index} comment={comment} />
          )) :
          <p>No Comments Yet</p>}
        </div>
      </div>
    </div>
  );
}

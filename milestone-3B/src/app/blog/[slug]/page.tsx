import style from "./blogPage.module.css";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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

  console.log("Slug:" + slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <main>
        <h1 className={style.blogTextH1}>
          <strong>{blog.title}</strong>
        </h1>
        <div className={style.blogContainer}>
          <div className={style.imageContainer}>
            <Image
              src={blog.image}
              alt={blog.image_alt}
              width={300}
              height={300}
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
      </main>
    </div>
  );
}

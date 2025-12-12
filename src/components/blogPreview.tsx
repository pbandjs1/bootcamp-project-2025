import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogDoc } from "@/database/blogSchema";

import style from "./blogPreview.module.css";

export default function BlogPreview({ blog }: { blog: BlogDoc }) {
  return (
    <div className={style.blogPost}>
      <div className={style.blogTextContainer}>
        <h2 className={style.blogTitle}>{blog.title}</h2>
        <p className={style.blogTextP}>{blog.description}</p>
        <p className={style.blogTextP}>
          {blog.date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
      <div className={style.blogImageContainer}>
        <Link href={`/blog/${blog.slug}`}>
          <Image
            className={style.blogImage}
            src={blog.image}
            alt={blog.image_alt || "undefined"}
            width={500}
            height={500}
          ></Image>
        </Link>
      </div>
    </div>
  );
}

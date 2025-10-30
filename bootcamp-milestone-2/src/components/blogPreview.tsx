import React from "react";
import type { Blog } from "@/app/blogData";
import Image from "next/image";
import Link from "next/link";

import style from "./blogPreview.module.css";

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.blogPost}>
      <div className={style.blogTextContainer}>
        <h2 className={style.blogTitle}>{props.title}</h2>
        <p className={style.blogTextP}>{props.description}</p>
        <p className={style.blogTextP}>{props.date}</p>
      </div>
      <div className={style.blogImageContainer}>
        <Link href={props.slug}>
        <Image
          className={style.blogImage}
          src={props.image}
          alt={props.imageAlt}
          width={500}
          height={500}
        ></Image>
        </Link>
      </div>
    </div>
  );
}
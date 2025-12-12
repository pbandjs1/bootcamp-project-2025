/* eslint-disable @typescript-eslint/no-explicit-any */
import style from "./projectPage.module.css";
import connectDB from "@/database/db";
import projectSchema from "@/database/projectSchema";
import Image from "next/image";
import Link from "next/link";
import Comment from "@/components/comment";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getProject(slug: string) {
  await connectDB();

  try {
    const project = await projectSchema.findOne({ slug }).orFail();
    return project;
  } catch (err) {
    return null;
  }
}

export default async function Blog({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <div className={style.projectContainer}>
        <div className={style.projectPost}>
          <h1 className={style.projectTextH1}>
            <strong>{project.title}</strong>
          </h1>

          <div className={style.projectTextContainer}>
            <div className={style.imageContainer}>
              <Image
                src={project.image}
                alt={project.image_alt || "image"}
                width={300}
                height={300}
              />
            </div>
            <h2 className={style.projectTextH2}>
              <strong>
                {project.date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </strong>
            </h2>
            <p className={style.projectTextP}>{project.description}</p>
          </div>
        </div>
        <div className={style.commentContainer}>
          {project.comments.map((comment: any, index: number) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

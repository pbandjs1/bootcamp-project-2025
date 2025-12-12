import React from "react";
import Image from "next/image";
import Link from "next/link";

import style from "./projectPreview.module.css";

type ProjectDoc = {
  title: string;
  author: string;
  date: Date;
  description: string;
  image: string;
  image_alt: string;
  slug: string;
};

export default function ProjectPreview({ project }: { project: ProjectDoc }) {
  return (
    <div>
      <main>
        <div className={style.project}>
            <div className={style.projectDetails}>
                <div className={style.projectImage}>
                    <Link href={`/portfolio/${project.slug}`}>
                        <Image src={project.image} alt={project.image_alt} width={300} height={300} />
                    </Link>
                </div>
                <p className={style.projectName}><strong>{project.title}</strong></p>
                <p className={style.projectDescription}>{project.description}</p>
            </div>
        </div>
    </main>
    </div>
  );
}

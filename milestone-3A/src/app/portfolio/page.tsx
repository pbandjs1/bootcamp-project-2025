import style from "./portfolio.module.css";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div>
      <main>
        <h1 className={style.pageTitle}>
            <strong>portfolio</strong>
        </h1>
        <div className={style.project}>
            <div className={style.projectDetails}>
                <div className={style.projectImage}>
                    <Link href="./">
                        <img src="IMG_0480.jpg" alt="A Picture Of This Website" width="300px" />
                    </Link>
                </div>
                <p className={style.projectName}><strong>personal website</strong></p>
                <p className={style.projectDescription}>A personal website for me, Nick Endresen. I share a little bit about me,
                    my blog, my resume, my projects, and my resume.</p>
            </div>
        </div>
    </main>
    </div>
  );
}

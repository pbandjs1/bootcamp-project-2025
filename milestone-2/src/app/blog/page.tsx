import BlogPreview from "@/components/blogPreview";
import type { Blog } from "../blogData";
import style from "./blog.module.css";
import blogs from "../blogData";

export default function Blog() {
  return (
    <div>
      <main>
        <h1 className={style.pageTitle}>
          <strong>blog</strong>
        </h1>
        <div className={style.blog}>
          <div id="blog-container" className={style.blogContainer}>
            {blogs.map(blog =>
                <BlogPreview  key={blog.title} {...blog} />
            )}
          </div>
        </div>
      </main>
      <footer className="footer">© 2025 | All Rights Reserved</footer>
    </div>
  );
}

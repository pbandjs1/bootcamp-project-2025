export const dynamic = "force-dynamic";
export const revalidate = 0;

import BlogPreview from "@/components/blogPreview";
import BlogModel from "../../database/blogSchema";
import style from "./blog.module.css";
import connectDB from "@/database/db";

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await BlogModel.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function Blog() {
  const blogs = await getBlogs();

  return (
    <div>
      <main>
        <h1 className={style.pageTitle}>
          <strong>blog</strong>
        </h1>
        <div className={style.blog}>
          <div id="blog-container" className={style.blogContainer}>
            {blogs ? blogs.map((blog) => (
              <BlogPreview key={blog.title} blog={blog} />
            )) : 
            <p className={style.blogTextP}>No Blogs Found</p>}
          </div>
        </div>
      </main>
      <footer className="footer">© 2025 | All Rights Reserved</footer>
    </div>
  );
}

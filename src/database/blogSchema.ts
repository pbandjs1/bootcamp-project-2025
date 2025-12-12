import mongoose, { Schema, models } from "mongoose";
import { IComment } from "@/components/comment"

export type BlogDoc = {
  title: string;
  author: string;
  date: Date;
  description: string;
  image: string;
  image_alt: string;
  slug: string;
};

// typescript type (can also be an interface)
export type Blog = {
    title: string;
    slug: string;
    date: Date;
    description: string; // for preview
    content: string; // text content for individual blog page
    image: string; // url for string in public
    image_alt: string; // alt for image
    comments: IComment[]; // array for comments
};

// mongoose schema 
export const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date() },
    description: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    image_alt: { type: String, required: true },
    
})

// defining the collection and model
const BlogModel = models.blogData ||
    mongoose.model("blogData", blogSchema, "blogData");

export default BlogModel;
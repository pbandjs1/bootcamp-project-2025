import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Project = {
    title: string;
    slug: string;
    date: Date;
    description: string; // for preview
    content: string; // text content for individual project page
    image: string; // url for string in public
    image_alt: string; // alt for image
};


// mongoose schema 
const projectSchema = new Schema<Project>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date() },
    description: { type: String, required: true },
    image: { type: String, required: true },
    image_alt: { type: String, required: true },
    content: { type: String, required: true },
})

// defining the collection and model
const ProjectModel = mongoose.models['projects'] ||
    mongoose.model('projects', projectSchema);

export default ProjectModel;
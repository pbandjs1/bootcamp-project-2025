export const dynamic = "force-dynamic";
export const revalidate = 0;

import connectDB from "@/database/db";
import style from "./portfolio.module.css";
import ProjectModel from "@/database/projectSchema";
import ProjectPreview from "@/components/projectPreview";

async function getProjects() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const projects = await ProjectModel.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return projects;
  } catch (err) {
    return null;
  }
}

export default async function Portfolio() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className={style.pageTitle}>
        <strong>portfolio</strong>
      </h1>
          <div id="project-container" className={style.projectContainer}>
            {projects ? projects.map((project) => (
              <ProjectPreview key={project.title} project={project} />
            )) : 
            <p className={style.projectTextP}>No Projects Found</p>}
          </div>
    </div>
  );
}

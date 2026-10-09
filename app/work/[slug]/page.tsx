import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectPage from "@/components/ProjectPage";

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — ${project.category}`,
    description: project.description,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectPage project={project} />;
}

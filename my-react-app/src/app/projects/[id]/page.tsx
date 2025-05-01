const projects = {
    1: { title: "Portfolio Website", description: "A personal portfolio site." },
    2: { title: "Weather App", description: "A React app for weather updates." },
    3: { title: "Task Manager", description: "A task management app." },
  };
  
  // This function tells Next.js which dynamic routes to pre-render
  export function generateStaticParams() {
    return Object.keys(projects).map((id) => ({ id }));
  }
  
  export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = projects[params.id as keyof typeof projects];
  
    if (!project) {
      return <p>Project not found.</p>;
    }
  
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-lg mt-4">{project.description}</p>
      </div>
    );
  }
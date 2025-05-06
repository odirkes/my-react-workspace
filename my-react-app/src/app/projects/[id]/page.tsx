const projects = {
  1: { title: "Goalee", description: "A student startup project I worked on as a part of Cogs 122. Goalee was a platform where individuals could achieve their personal goals while working together in teams. For this project, I was our branding lead, creating assets like logos, catchphrases, and marketing materials in order to establish a consistent brand identity. I also assisted with facets like our potential budget and fundraising strategies." },
  2: { title: "Eco-Defender", description: "A video game my team and I developed as a part of ENG 100D. Eco-Defender's mission was to create a fun and informative platform to educate users on pollution in San Diego's waterways. I worked as the Art Director for this project and produced original art, assets, and backgrounds." },
  3: { title: "85 Degrees Bakery Kiosk", description: "A physical kiosk my team and I developed as a part of DSGN 100. Our kiosk was based around 85 Degrees Bakery Cafe, as a way for customers to purchase pastries outside of traditional brick-and-mortar stores. I worked on our user interfaces and kiosk branding." },
};

export function generateStaticParams() {
  const params = Object.keys(projects).map((id) => ({ id }));
  console.log("Generated Static Params:", params); // Debugging
  return params;
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params; // Await the params object
  console.log("Params received:", resolvedParams);

  // Convert the string ID to a number and validate it
  const projectId = parseInt(resolvedParams.id, 10) as keyof typeof projects;

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-lg mt-4">{project.description}</p>
    </div>
  );
}
const projects = {
    1: { title: "Goalee", description: "A student startup project I worked on as a part of Cogs 122. Goalee was a platform where individuals could achieve their personal goals while working together in teams. For this project, I was our branding lead, creating assets lke logos, catchphrases, and marketing materials in order to establish a consistent brand identity. I also assisted with facets like our potential budget and fundraising strategies." },
    2: { title: "Eco-Defender", description: "A video game my team and I developed as a part of ENG 100D. Eco-Defender's mission was to create a fun and informative platform to educate users on pollution in San Diego's waterways. I worked as the Art Director for this project and produced original art, assets, and backgrounds." },
    3: { title: "85 Degrees Bakery Kiosk", description: "A physical kiosk my team and I developed as a part of DSGN 100. Our kiosk was based around 85 Degrees Bakery Cafe, as a way for customers to purcahse pastries outside of traditional brick and mortar stores. I worked on our user interfaces and kiosk branding." },
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
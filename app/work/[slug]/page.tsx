import { notFound } from 'next/navigation';
import ProjectHero from '@/components/sections/ProjectHero';
import ProjectOverview from '@/components/sections/ProjectOverview';
import ProjectGallery from '@/components/sections/ProjectGallery';
import ProjectResults from '@/components/sections/ProjectResults';
import ProjectPhotos from '@/components/sections/ProjectPhotos'; // Add this
import ProjectNavigation from '@/components/sections/ProjectNavigation';
import { projects } from '@/data/projects';

// Sample project photos for each project (you'll replace with your actual photos)
const projectProcessPhotos = {
  'tradeflow-pro': [
    { url: "/images/projects/tradeflow-pro/process-1.webp", caption: "Initial wireframes for trading dashboard", type: "process" as const },
    { url: "/images/projects/tradeflow-pro/process-2.webp", caption: "User flow diagram for AI trade analysis", type: "process" as const },
    { url: "/images/projects/tradeflow-pro/design-1.webp", caption: "Figma design system for trading interface", type: "design" as const },
    { url: "/images/projects/tradeflow-pro/code-1.webp", caption: "Next.js 14 component architecture", type: "development" as const },
    { url: "/images/projects/tradeflow-pro/result-1.webp", caption: "Final dashboard implementation", type: "result" as const },
  ],
  'ft45-fitness': [
    { url: "/images/projects/ft45-fitness/process-1.webp", caption: "Content strategy mapping session", type: "process" as const },
    { url: "/images/projects/ft45-fitness/process-2.webp", caption: "Brand mood board and color palette", type: "process" as const },
    { url: "/images/projects/ft45-fitness/design-1.webp", caption: "Instagram feed layout in Adobe Illustrator", type: "design" as const },
    { url: "/images/projects/ft45-fitness/result-1.webp", caption: "Final Instagram feed implementation", type: "result" as const },
    { url: "/images/projects/ft45-fitness/result-2.webp", caption: "Client presenting campaign results", type: "result" as const },
  ],
  'cintaconnect': [
    { url: "/images/projects/cintaconnect/process-1.webp", caption: "User journey mapping for dating platform", type: "process" as const },
    { url: "/images/projects/cintaconnect/design-1.webp", caption: "Figma prototype for video chat interface", type: "design" as const },
    { url: "/images/projects/cintaconnect/code-1.webp", caption: "WebRTC implementation code", type: "development" as const },
    { url: "/images/projects/cintaconnect/result-1.webp", caption: "Beta testing session with users", type: "result" as const },
  ],
  'kifkif-space': [
    { url: "/images/projects/kifkif-space/process-1.webp", caption: "Business model canvas for KifKif", type: "process" as const },
    { url: "/images/projects/kifkif-space/process-2.webp", caption: "User research interviews in Tunis", type: "process" as const },
    { url: "/images/projects/kifkif-space/design-1.webp", caption: "Platform wireframes and user flows", type: "design" as const },
    { url: "/images/projects/kifkif-space/code-1.webp", caption: "Real-time reward tracking system", type: "development" as const },
    { url: "/images/projects/kifkif-space/result-1.webp", caption: "Launch event photos with first users", type: "result" as const },
  ],
  'luxe-home': [
    { url: "/images/projects/luxe-home/process-1.webp", caption: "3D modeling process in Blender", type: "process" as const },
    { url: "/images/projects/luxe-home/process-2.webp", caption: "AR prototype testing on mobile devices", type: "process" as const },
    { url: "/images/projects/luxe-home/design-1.webp", caption: "UI design for product configurator", type: "design" as const },
    { url: "/images/projects/luxe-home/code-1.webp", caption: "Three.js implementation for 3D viewer", type: "development" as const },
    { url: "/images/projects/luxe-home/result-1.webp", caption: "Client showcasing AR feature to customers", type: "result" as const },
  ]
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;

  return (
    <main>
      <ProjectHero
        title={project.title}
        subtitle={project.subtitle}
        category={project.category}
        year={Number(project.year)}
        heroImage={project.heroImage}
        liveUrl={project.liveUrl}
      />

      <ProjectOverview
  challenge={project.businessChallenge}
  solution={project.designSolution}
  results={project.measurableResults}
  role={project.role}
  client={project.client}
  category={project.category}
  timeline={`${project.year}`}
  technicalStack={project.technicalStack || []} // Added
  keyFeatures={project.keyFeatures || []} // Added
/>

      <ProjectGallery
        images={project.gallery}
        captions={project.galleryCaptions}
      />

      

      <ProjectResults
        metrics={project.measurableResults.map(result => ({
          before: 'Before',
          after: result.value,
          improvement: result.value,
          label: result.metric,
        }))}
        testimonial={project.testimonial}
      />

      <ProjectNavigation
        previousProject={previousProject ? {
          slug: previousProject.slug,
          title: previousProject.title,
          category: previousProject.category,
        } : undefined}
        nextProject={nextProject ? {
          slug: nextProject.slug,
          title: nextProject.title,
          category: nextProject.category,
        } : undefined}
      />
    </main>
  );
}

import Canvas from "./components/Canvas";
import { HeroSection } from "./components/HeroSection";
import { PostsSection } from "./components/PostsSection";
import { ProjectsSection } from "./components/ProjectsSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 px-6 pb-8 lg:flex-row lg:items-center lg:gap-16">
      <Canvas />
      <HeroSection />

      <div className="flex flex-col space-y-8">
        <PostsSection />
        <ProjectsSection />
      </div>
    </div>
  );
}

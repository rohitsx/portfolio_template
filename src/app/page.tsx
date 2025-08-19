import { Bio } from "@/components/layout/bio";
import { FeaturedVideos } from "@/components/layout/featuredVideos";
import { Footer } from "@/components/layout/footer";
import { Skills } from "@/components/layout/skills";

export default function Home() {
  return (
    <>
      <Bio />
      <FeaturedVideos />
      <Skills />
      <Footer />
    </>
  );
}

import SectionHeading from "@/common/component/elements/sectionHeading";
import { ArrowRight } from "lucide-react"
import Link from "next/link";

export const FeaturedVideos = () => {
  const videos = [
    { id: "36hbYPvvbVQ", title: "StreamSync", description: "Voice to Super Chats for direct creator-audience interaction." },
    { id: "ruUl1iP9fH8", title: "JobFit Resume", description: "Tailor your resume to the job description. (Youtube Demo Video)" },
    { id: "Weq_XcdFCeg", title: "Pic0", description: "AI-powered photo editing app with simple text prompts" },
    { id: "YTGfyUdhu-U", title: "Omegle Clone", description: "Real-time video chat platform that connects strangers for random, spontaneous conversations." },
    { id: "GAppsFFlnmM", title: "Repli AI", description: "Repli AI – WhatsApp AI Agent for Email (unfinished)" },
  ];

  return (
    <div className="space-y-8 border-b pb-8 border-neutral-200">
      <div className="flex justify-between items-center">
        <SectionHeading title="Featured Videos" />
        <div className="flex gap-2 items-center text-sm">
          <Link href="https://www.youtube.com/@water-98/videos" target="_blank">View all <span className="hidden md:inline">Videos</span></Link>
          <ArrowRight size={16} />
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar">
        {videos.map((video) => (
          <div key={video.id} className="flex-shrink-0 overflow-hidden">
            <div className="w-80 relative">
              {/* Video iframe */}
              <iframe
                width="100%"
                height="180"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allowFullScreen
                className="h-100 rounded-xl"
              ></iframe>

              <div className="absolute bottom-0 h-21 left-0 w-full bg-neutral-50 border p-2 rounded-b-lg shadow-2xs">
                <h3 className="font-medium ">{video.title}</h3>
                <p className="text-xs">{video.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


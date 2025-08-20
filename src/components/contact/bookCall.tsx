import { Container } from "@/common/component/elements/container"
import { Calendar, Clock5, Video } from "lucide-react"
import Link from "next/link"

export const BookCall = () => {
  return <Container title="Book a Call" className="mb-30">
    <div className="border border-neutral-200 bg-white rounded-2xl p-5 text-neutral-800 
                transition-transform duration-300 hover:scale-101">
      <Link href="https://cal.com/rohit0" target="_blank">
        <div className="flex items-start justify-between">
          <div className="space-y-4 text-sm md:text-base">
            <div>
              <h4 className="font-medium text-base md:text-lg">1 on 1 Chit-Chat Session</h4>
              <p >Let's find some time to talk about anything.</p>
            </div>
            <div className="flex gap-4 justify-start">
              <div className="flex items-center gap-2">
                <Clock5 className="size-5" />
                <p>15 or 30 Min</p>
              </div>
              <div className="flex items-center gap-2">
                <Video className="size-5" />
                <p>Google Meet</p>
              </div>
            </div>
          </div>
          <div className="border-2 border-neutral-400 rounded-full p-3">
            <Calendar className="size-6" />
          </div>
        </div>
      </Link>
    </div>
  </Container>
}

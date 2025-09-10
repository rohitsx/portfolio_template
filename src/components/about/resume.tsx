import { Maximize2 } from "lucide-react"
import Link from "next/link"
import '@/common/styles/scrollBar.css'

export const Resume = () => {
  return <div className="h-full flex flex-col gap-5">
    <Link
      target="_blank"
      className="w-fit flex items-center gap-2 border border-neutral-200 text-neutral-600 p-2 px-6 rounded-lg text-sm"
      href="https://docs.google.com/document/d/1p1lM8qGFQbo8aEMi5lKIzpA1YzOJJNZKnpadHvKxsCc/edit?usp=sharing"
    >
      <Maximize2 className="w-4 h-4" />
      View Full Screen
    </Link>
    <iframe
      className="w-full h-180"
      src="https://docs.google.com/document/d/e/2PACX-1vSJUigr1CQpYj5VoJ330Nafz5blrPrCM5taCypzjtU_CA7x-efdEfJAQQUhFL1G4dRIQbit5ocVnamT/pub?embedded=true"
    />
  </div>
}

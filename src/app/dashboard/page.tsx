import { Contributions } from "@/components/dashboard/contributions";
import { WaktimeStats } from "@/components/dashboard/wakatimeStats";

export default function Dashboard() {

  return <>
    <section className="space-y-1 border-b border-dashed pb-8 md:pb-5 border-neutral-800">
      <h1 className="text-2xl text-neutral-800 font-medium ">Dashboard</h1>
      <p className="text-neutral-600">This is my personal dashboard, built with Next.js API routes deployed as serverless functions.</p>
    </section>
    <WaktimeStats />
    <Contributions />
  </>
}

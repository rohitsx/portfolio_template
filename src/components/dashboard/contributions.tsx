"use client"

import { Container } from "@/common/component/elements/container"
import Link from "next/link"
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import CalendarHeatmap from 'react-calendar-heatmap';
import "react-calendar-heatmap/dist/styles.css";
import { count } from "console";

type CommitGraphProps = {
  date: string,
  count: string
}

type StatsProps = {
  total: string,
  thisWeek: string,
  bestDay: string,
  average: string,
  commitGraph: CommitGraphProps[]
}

export const Contributions = () => {

  const [stats, setStats] = useState<StatsProps>({
    total: "",
    thisWeek: "",
    bestDay: "",
    average: "",
    commitGraph: []
  })

  const [commits, setCommits] = useState({
    count: null,
    date: "",
  })

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/dashboard/github')
      const { total, thisWeek, bestDay, average, commitGraph } = await res.json()
      setStats({
        total, thisWeek, bestDay, average, commitGraph
      })
    }

    getData()

  }, [])

  const StatsContainer = ({ title, value }: { title: string, value: string }) => <div className="p-2 border border-neutral-200 shadow-2xs rounded-lg">
    <p className="font-medium ">{title}</p>
    <p className="text-xl md:text-2xl font-medium text-[#2dba4e]">{value} {title === "Average" && <span className="text-base text-neutral-800">/ day</span>}</p>
  </div>

  return <Container title="Contributions" icon={<FaGithub />} className="space-y-2 md:space-y-1 mb-18">
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="md:flex justify-between items-center space-y-1">
          <p>My contributions from last year on github.</p>
          <Link href="https://github.com/rohitsx" className="text-neutral-400">@rohitsx</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 md:px-2 gap-3 ">
          <StatsContainer title="Total" value={stats.total} />
          <StatsContainer title="This Week" value={stats.thisWeek} />
          <StatsContainer title="Best Day" value={stats.bestDay} />
          <StatsContainer title="Average" value={stats.average} />

        </div>
      </div>
      <div className="space-y-2">
        {stats.commitGraph.length > 0 && <CalendarHeatmap
          startDate={new Date(stats.commitGraph[0].date)}
          endDate={new Date(stats.commitGraph[stats.commitGraph.length - 1].date)}
          values={stats.commitGraph.map(day => ({
            date: day.date,
            count: Number(day.count)
          }))}
          onMouseOver={(e, v) => v && setCommits({ count: v.count, date: v.date })}
          onMouseLeave={() => setCommits({ count: null, date: "" })}
          gutterSize={4}
          classForValue={(value) => {
            if (!value) return 'color-empty';
            if (value.count < 1) return 'color-scale-1';
            if (value.count < 2) return 'color-scale-2';
            if (value.count < 3) return 'color-scale-3';
            return 'color-scale-4';
          }}

        />}
        <div className="w-full space-y-2 md:flex justify-between items-center">
          <div className="flex items-center space-x-2 mt-4">
            <span className="text-sm">Less</span>
            <div className="flex space-x-1">
              <div className="size-2 md:size-2.5 bg-[#d1d5db]" ></div>
              <div className="size-2 md:size-2.5 bg-[#c6eec0]" ></div>
              <div className="size-2 md:size-2.5 bg-[#8fd49b]" ></div>
              <div className="size-2 md:size-2.5 bg-[#5fb06c]" ></div>

            </div>
            <span className="text-sm">More</span>
          </div>
          <div className={`bg-gray-200 px-3 font-medium text-sm rounded-sm max-w-fit ${!commits.count && "hidden"}`}>{commits.count} contributions on {commits.date}</div>
        </div>
      </div>
    </div>


  </Container>
}

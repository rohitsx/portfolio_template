"use client"

import { useEffect, useState } from "react"
import { Shareable } from "./shareable";
import { Container } from "@/common/component/elements/container";
import { Clock } from "lucide-react";

type Item = {
  name: string;
  percent: number;
  color: string;
};

type ShareableProps = {
  lagauge: Item[];
  categories: Item[];
}

export const WaktimeStats = () => {
  const [data, setData] = useState({ bestDay: "", dailyAverage: "", endDate: "", startDate: "", weeklyTotal: "", allTimeTotal: "" })

  const [shareable, setShareable] = useState<ShareableProps>({
    lagauge: [],
    categories: []
  })

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/dashboard/wakatime')
      const { bestDay, dailyAverage, endDate, startDate, weeklyTotal, allTimeTotal } = await res.json()
      setData({
        bestDay,
        dailyAverage,
        endDate,
        startDate,
        weeklyTotal,
        allTimeTotal
      })
    }

    const getLaguage = async () => {
      const res = await fetch("https://wakatime.com/share/@rohitsx/7bbf6a11-2842-4d5e-92fd-5156cb72e37b.json")
      const { data } = await res.json()
      setShareable(pre => ({
        ...pre,
        lagauge: data
      })
      )
    }


    const getCategories = async () => {
      const res = await fetch("https://wakatime.com/share/@rohitsx/a08bdabd-991a-4312-849f-0b00bec382b0.json")
      const { data } = await res.json()
      setShareable(pre => ({
        ...pre,
        categories: data
      })
      )
    }
    getData()
    getLaguage()
    getCategories()
  }, [])

  const Status = ({ title, value }: { title: string, value: string }) => <div className="border w-full px-4 py-3 rounded-xl">
    <p className="text-sm">{title}</p>
    <div className="font-medium">{value === "" ? "N/A" : value}</div>
  </div>


  return <Container title="Weekly Statistics" icon={<Clock />} className="space-y-2 md:space-y-1">
    <div className="space-y-4">
      <p>My WakaTime last 7 days stats.</p>
      <div className="grid md:grid-cols-2 gap-3">
        <Status title="Start Date" value={data.startDate} />
        <Status title="End Date" value={data.endDate} />
        <Status title="Daily Coding Average" value={data.dailyAverage} />
        <Status title="This Week Coding Time" value={data.weeklyTotal} />
        <Status title="Best Day Coding Time" value={data.bestDay} />
        <Status title="All Time Since Today" value={data.allTimeTotal} />
        <Shareable title="language" variant="languages" data={shareable.lagauge} />
        <Shareable title="Categories" variant="categories" data={shareable.categories} />
      </div>
    </div>
  </Container>
}

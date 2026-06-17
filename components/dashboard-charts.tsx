'use client'

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { cn } from '@/lib/utils'
import {
  engagementTrend,
  weeklyEngagement,
  activityOverview,
  topicUnderstanding,
} from '@/lib/data'

const engagementConfig = {
  engagement: { label: 'Engagement', color: 'var(--chart-1)' },
  focus: { label: 'Focus', color: 'var(--chart-2)' },
  participation: { label: 'Participation', color: 'var(--chart-3)' },
}

export function EngagementTrendChart() {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Engagement Trend</CardTitle>
        <CardDescription>Live session · last 90 minutes</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={engagementConfig} className="h-[260px] w-full">
          <AreaChart data={engagementTrend} margin={{ left: -16, right: 8, top: 8 }}>
            <defs>
              <linearGradient id="fillEngagement" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-engagement)" stopOpacity={0.35} />
                <stop offset="95%" stopColor="var(--color-engagement)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="fillFocus" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-focus)" stopOpacity={0.25} />
                <stop offset="95%" stopColor="var(--color-focus)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
            <YAxis tickLine={false} axisLine={false} fontSize={12} domain={[40, 100]} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area dataKey="focus" type="monotone" stroke="var(--color-focus)" fill="url(#fillFocus)" strokeWidth={2} />
            <Area dataKey="engagement" type="monotone" stroke="var(--color-engagement)" fill="url(#fillEngagement)" strokeWidth={2} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

const weeklyConfig = {
  score: { label: 'Engagement Score', color: 'var(--chart-1)' },
}

export function WeeklyEngagementChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Engagement</CardTitle>
        <CardDescription>Average score per day</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={weeklyConfig} className="h-[260px] w-full">
          <BarChart data={weeklyEngagement} margin={{ left: -16, right: 8, top: 8 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
            <YAxis tickLine={false} axisLine={false} fontSize={12} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="score" fill="var(--color-score)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

const activityConfig = {
  value: { label: 'Count', color: 'var(--chart-2)' },
}

export function ActivityOverviewChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Activity</CardTitle>
        <CardDescription>Interactions this session</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={activityConfig} className="h-[220px] w-full">
          <BarChart data={activityOverview} layout="vertical" margin={{ left: 8, right: 16 }}>
            <CartesianGrid horizontal={false} strokeDasharray="3 3" />
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} width={72} fontSize={12} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="value" fill="var(--color-value)" radius={6} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export function TopicHeatmap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Topic Understanding</CardTitle>
        <CardDescription>Class comprehension by topic</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {topicUnderstanding.map((t) => {
          const tone =
            t.understanding >= 80
              ? 'bg-success'
              : t.understanding >= 65
                ? 'bg-warning'
                : 'bg-destructive'
          return (
            <div key={t.topic} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{t.topic}</span>
                <span className="tabular-nums text-muted-foreground">
                  {t.understanding}%
                </span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className={cn('h-full rounded-full transition-all', tone)}
                  style={{ width: `${t.understanding}%` }}
                />
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

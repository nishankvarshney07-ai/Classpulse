'use client'

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  XAxis,
  YAxis,
} from 'recharts'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  engagementDistribution,
  quizPerformanceTrend,
  topicUnderstanding,
  weeklyEngagement,
} from '@/lib/data'

const distConfig = {
  value: { label: 'Students' },
  Engaged: { label: 'Engaged', color: 'var(--chart-3)' },
  Moderate: { label: 'Moderate', color: 'var(--chart-4)' },
  'At Risk': { label: 'At Risk', color: 'var(--destructive)' },
}

export function EngagementDistributionChart() {
  return (
    <ChartContainer config={distConfig} className="mx-auto h-[240px] w-full">
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
        <Pie
          data={engagementDistribution}
          dataKey="value"
          nameKey="name"
          innerRadius={58}
          strokeWidth={2}
        >
          {engagementDistribution.map((e) => (
            <Cell key={e.name} fill={e.fill} />
          ))}
        </Pie>
        <ChartLegend content={<ChartLegendContent nameKey="name" />} />
      </PieChart>
    </ChartContainer>
  )
}

const partConfig = {
  score: { label: 'Engagement', color: 'var(--chart-1)' },
  quizzes: { label: 'Quizzes', color: 'var(--chart-2)' },
}

export function ParticipationAnalyticsChart() {
  return (
    <ChartContainer config={partConfig} className="h-[240px] w-full">
      <BarChart data={weeklyEngagement} margin={{ left: -16, right: 8, top: 8 }}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
        <YAxis tickLine={false} axisLine={false} fontSize={12} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="score" fill="var(--color-score)" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ChartContainer>
  )
}

const quizConfig = {
  accuracy: { label: 'Accuracy', color: 'var(--chart-2)' },
}

export function QuizPerformanceChart() {
  return (
    <ChartContainer config={quizConfig} className="h-[240px] w-full">
      <LineChart data={quizPerformanceTrend} margin={{ left: -16, right: 12, top: 8 }}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="quiz" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
        <YAxis tickLine={false} axisLine={false} fontSize={12} domain={[50, 100]} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line dataKey="accuracy" type="monotone" stroke="var(--color-accuracy)" strokeWidth={2.5} dot={{ r: 4, fill: 'var(--color-accuracy)' }} />
      </LineChart>
    </ChartContainer>
  )
}

const radarConfig = {
  understanding: { label: 'Understanding', color: 'var(--chart-1)' },
}

export function TopicBreakdownRadar() {
  return (
    <ChartContainer config={radarConfig} className="mx-auto h-[240px] w-full">
      <RadarChart data={topicUnderstanding}>
        <ChartTooltip content={<ChartTooltipContent />} />
        <PolarGrid stroke="var(--border)" />
        <PolarAngleAxis dataKey="topic" fontSize={11} />
        <Radar
          dataKey="understanding"
          stroke="var(--color-understanding)"
          fill="var(--color-understanding)"
          fillOpacity={0.35}
          strokeWidth={2}
        />
      </RadarChart>
    </ChartContainer>
  )
}

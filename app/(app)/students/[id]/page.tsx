import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  CalendarCheck,
  Activity,
  FileCheck2,
  TrendingUp,
  LogIn,
  Vote,
  MessageCircleQuestion,
  ClipboardCheck,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { StatusBadge } from '@/components/status-badge'
import { FocusTrendChart } from '@/components/focus-trend-chart'
import { students, studentTimeline } from '@/lib/data'
import { cn } from '@/lib/utils'

const timelineIcon = {
  join: LogIn,
  quiz: ClipboardCheck,
  poll: Vote,
  question: MessageCircleQuestion,
}

export function generateStaticParams() {
  return students.map((s) => ({ id: s.id }))
}

export default async function StudentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const student = students.find((s) => s.id === id)
  if (!student) notFound()

  const metrics = [
    { label: 'Attendance', value: `${student.attendance}%`, icon: CalendarCheck, tone: 'text-primary bg-primary/15' },
    { label: 'Participation', value: `${student.participation}%`, icon: Activity, tone: 'text-accent bg-accent/15' },
    { label: 'Quiz Accuracy', value: `${student.quizAccuracy}%`, icon: FileCheck2, tone: 'text-warning bg-warning/15' },
    { label: 'Focus Trend', value: '+18%', icon: TrendingUp, tone: 'text-success bg-success/15' },
  ]

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <Button variant="ghost" size="sm" className="w-fit" render={<Link href="/students" />}>
        <ArrowLeft data-icon="inline-start" />
        Back to Students
      </Button>

      <Card className="relative overflow-hidden bg-gradient-to-br from-primary/15 via-card to-accent/10">
        <div className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full bg-primary/20 blur-3xl" />
        <CardContent className="relative flex flex-col gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="size-16 ring-2 ring-primary/30">
              <AvatarFallback className="bg-primary/20 text-xl font-semibold text-primary">
                {student.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1.5">
              <h1 className="text-2xl font-semibold tracking-tight">
                {student.name}
              </h1>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>Roll No. {student.roll}</span>
                <span className="size-1 rounded-full bg-muted-foreground" />
                <StatusBadge status={student.status} />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-border bg-card/60 px-5 py-3">
            <div>
              <p className="text-xs text-muted-foreground">Engagement Score</p>
              <p className="text-3xl font-semibold tabular-nums text-primary">
                {student.engagement}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {metrics.map((m) => {
          const Icon = m.icon
          return (
            <Card key={m.label} className="gap-0 p-5">
              <span className={cn('flex size-10 items-center justify-center rounded-lg', m.tone)}>
                <Icon className="size-5" />
              </span>
              <p className="mt-3 text-2xl font-semibold tabular-nums">
                {m.value}
              </p>
              <p className="text-xs text-muted-foreground">{m.label}</p>
            </Card>
          )
        })}
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Focus Trend</CardTitle>
            <CardDescription>Weekly focus score over 6 weeks</CardDescription>
          </CardHeader>
          <CardContent>
            <FocusTrendChart />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Session Timeline</CardTitle>
            <CardDescription>Today&apos;s activity</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="relative flex flex-col gap-5 border-l border-border pl-6">
              {studentTimeline.map((item, i) => {
                const Icon = timelineIcon[item.type]
                return (
                  <li key={i} className="relative">
                    <span className="absolute -left-[34px] flex size-6 items-center justify-center rounded-full border border-border bg-card text-primary">
                      <Icon className="size-3" />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium">{item.event}</p>
                        <span className="text-xs tabular-nums text-muted-foreground">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground text-pretty">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

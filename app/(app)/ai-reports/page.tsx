'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Award,
  Lightbulb,
  Loader2,
  CheckCircle2,
  Users,
} from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { aiReports, students } from '@/lib/data'

export default function AiReportsPage() {
  const [generating, setGenerating] = useState(false)
  const report = aiReports[0]

  function handleGenerate() {
    setGenerating(true)
    toast('Generating AI report…', {
      description: 'Analyzing engagement, quiz, and poll data.',
    })
    setTimeout(() => {
      setGenerating(false)
      toast.success('AI report ready', {
        description: 'Your weekly engagement digest has been generated.',
      })
    }, 2200)
  }

  const initials = (name: string) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      <PageHeader
        title="AI Reports"
        description="AI-generated insights and recommendations for your classroom"
        action={
          <Button onClick={handleGenerate} disabled={generating}>
            {generating ? (
              <Loader2 data-icon="inline-start" className="animate-spin" />
            ) : (
              <Sparkles data-icon="inline-start" />
            )}
            {generating ? 'Generating…' : 'Generate Report'}
          </Button>
        }
      />

      {/* Large AI Summary Card */}
      <Card className="relative overflow-hidden border-primary/25 bg-gradient-to-br from-primary/12 via-card to-accent/8">
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/20 blur-3xl" />
        <CardHeader className="relative">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary/20 text-primary">
              <Sparkles className="size-5" />
            </span>
            <Badge variant="secondary" className="gap-1">
              <span className="size-1.5 rounded-full bg-success" />
              Generated {report.generated}
            </Badge>
          </div>
          <CardTitle className="pt-2 text-xl text-balance">
            {report.title}
          </CardTitle>
          <CardDescription className="max-w-2xl text-pretty leading-relaxed">
            {report.summary}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card/60 p-4">
              <TrendingUp className="size-4 text-success" />
              <p className="mt-2 text-2xl font-semibold tabular-nums">
                {report.avgEngagement}%
              </p>
              <p className="text-xs text-muted-foreground">Average Engagement</p>
            </div>
            <div className="rounded-xl border border-border bg-card/60 p-4">
              <AlertTriangle className="size-4 text-warning" />
              <p className="mt-2 text-2xl font-semibold">
                {report.confusingTopic}
              </p>
              <p className="text-xs text-muted-foreground">Most Confusing Topic</p>
            </div>
            <div className="col-span-2 rounded-xl border border-border bg-card/60 p-4 sm:col-span-1">
              <Users className="size-4 text-destructive" />
              <p className="mt-2 text-2xl font-semibold tabular-nums">
                {report.needAttention.length}
              </p>
              <p className="text-xs text-muted-foreground">Need Attention</p>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <Award className="size-4 text-success" />
                Most Engaged Students
              </p>
              <div className="flex flex-col gap-2">
                {report.mostEngaged.map((name) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card/40 px-3 py-2"
                  >
                    <Avatar className="size-8">
                      <AvatarFallback className="bg-success/15 text-xs font-semibold text-success">
                        {initials(name)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{name}</span>
                    <Badge variant="secondary" className="ml-auto text-[10px]">
                      Top performer
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <AlertTriangle className="size-4 text-destructive" />
                Students Requiring Attention
              </p>
              <div className="flex flex-col gap-2">
                {report.needAttention.map((name) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card/40 px-3 py-2"
                  >
                    <Avatar className="size-8">
                      <AvatarFallback className="bg-destructive/15 text-xs font-semibold text-destructive">
                        {initials(name)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{name}</span>
                    <Badge variant="outline" className="ml-auto text-[10px]">
                      Follow up
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="size-5 text-warning" />
            AI Recommendations
          </CardTitle>
          <CardDescription>
            Suggested actions to improve outcomes this week
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {report.recommendations.map((rec, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-border bg-secondary/40 p-4"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-pretty">{rec}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Past reports */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: 'Stacks & Queues Recap', date: 'Last week', eng: 83 },
          { title: 'Mid-term Engagement Review', date: '2 weeks ago', eng: 79 },
          { title: 'Linked Lists Deep Dive', date: '3 weeks ago', eng: 86 },
        ].map((r) => (
          <Card key={r.title} className="transition-colors hover:border-primary/40">
            <CardHeader>
              <span className="flex size-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <Sparkles className="size-4" />
              </span>
              <CardTitle className="pt-2 text-base text-pretty">
                {r.title}
              </CardTitle>
              <CardDescription>{r.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Avg. engagement
              </span>
              <span className="text-lg font-semibold tabular-nums text-primary">
                {r.eng}%
              </span>
            </CardContent>
          </Card>
        ))}
      </section>

      <p className="text-center text-xs text-muted-foreground">
        Insights generated from {students.length} students across live sessions,
        quizzes and polls.
      </p>
    </div>
  )
}

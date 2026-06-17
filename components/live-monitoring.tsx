import { Radio, Users, Activity, Vote, FileCheck2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { liveSession } from '@/lib/data'

const metrics = [
  { label: 'Students Online', value: liveSession.studentsOnline, icon: Users, tone: 'text-primary' },
  { label: 'Avg. Engagement', value: `${liveSession.avgEngagement}%`, icon: Activity, tone: 'text-accent' },
  { label: 'Poll Responses', value: liveSession.pollResponses, icon: Vote, tone: 'text-success' },
  { label: 'Quiz Responses', value: liveSession.quizResponses, icon: FileCheck2, tone: 'text-warning' },
]

export function LiveMonitoring() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex-row items-center justify-between border-b border-border">
        <div className="flex items-center gap-2.5">
          <span className="relative flex size-2.5">
            <span className="absolute size-2.5 animate-ping rounded-full bg-success/70" />
            <span className="size-2.5 rounded-full bg-success" />
          </span>
          <CardTitle>Live Classroom Monitoring</CardTitle>
        </div>
        <Badge variant="secondary" className="gap-1">
          <Radio className="size-3" />
          {liveSession.elapsed}
        </Badge>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="rounded-xl border border-border bg-secondary/40 p-4">
          <p className="text-xs font-medium text-muted-foreground">
            Current Topic Being Taught
          </p>
          <p className="mt-1 text-lg font-semibold text-pretty">
            {liveSession.topic}
          </p>
          <p className="text-xs text-muted-foreground">{liveSession.module}</p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {metrics.map((m) => {
            const Icon = m.icon
            return (
              <div
                key={m.label}
                className="rounded-xl border border-border bg-card p-4"
              >
                <Icon className={`size-4 ${m.tone}`} />
                <p className="mt-2 text-2xl font-semibold tabular-nums">
                  {m.value}
                </p>
                <p className="text-xs text-muted-foreground">{m.label}</p>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Vote, FileQuestion, Square, UserPlus, FileCheck2, Sparkles } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LiveMonitoring } from '@/components/live-monitoring'
import { PollModal, QuizModal } from '@/components/session-modals'
import { notifications } from '@/lib/data'
import { cn } from '@/lib/utils'

const feedIcon = { join: UserPlus, quiz: FileCheck2, poll: Vote, report: Sparkles }

export default function LiveSessionPage() {
  const [pollOpen, setPollOpen] = useState(false)
  const [quizOpen, setQuizOpen] = useState(false)

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <PageHeader
        title="Live Session"
        description="Monitor and control your classroom in real time"
        action={
          <div className="flex items-center gap-2">
            <Button variant="secondary" onClick={() => setPollOpen(true)}>
              <Vote data-icon="inline-start" />
              Launch Poll
            </Button>
            <Button variant="secondary" onClick={() => setQuizOpen(true)}>
              <FileQuestion data-icon="inline-start" />
              Launch Quiz
            </Button>
            <Button
              variant="destructive"
              onClick={() =>
                toast('Session ended', {
                  description: 'Engagement data has been saved.',
                })
              }
            >
              <Square data-icon="inline-start" />
              End
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LiveMonitoring />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Notification Feed</CardTitle>
            <CardDescription>Real-time classroom activity</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {notifications.map((n) => {
              const Icon = feedIcon[n.type]
              return (
                <div
                  key={n.id}
                  className="flex items-start gap-3 rounded-lg border border-border bg-secondary/40 p-3"
                >
                  <span
                    className={cn(
                      'flex size-7 shrink-0 items-center justify-center rounded-md',
                      n.type === 'report'
                        ? 'bg-primary/15 text-primary'
                        : 'bg-accent/15 text-accent',
                    )}
                  >
                    <Icon className="size-3.5" />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm leading-snug">{n.text}</p>
                    <span className="text-xs text-muted-foreground">
                      {n.time}
                    </span>
                  </div>
                </div>
              )
            })}
            <Badge variant="secondary" className="mt-1 w-fit">
              Live feed updating
            </Badge>
          </CardContent>
        </Card>
      </div>

      <PollModal open={pollOpen} onOpenChange={setPollOpen} />
      <QuizModal open={quizOpen} onOpenChange={setQuizOpen} />
    </div>
  )
}

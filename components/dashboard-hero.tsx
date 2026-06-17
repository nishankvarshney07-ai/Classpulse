'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Play, Vote, FileQuestion, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { PollModal, QuizModal } from '@/components/session-modals'
import { teacher, activeClassroom } from '@/lib/data'

export function DashboardHero() {
  const [pollOpen, setPollOpen] = useState(false)
  const [quizOpen, setQuizOpen] = useState(false)

  return (
    <Card className="relative overflow-hidden border-border bg-gradient-to-br from-primary/15 via-card to-accent/10 p-6 md:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-muted-foreground">
            Welcome back, Professor
          </span>
          <h1 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">
            {teacher.name.split(' ').slice(-1)[0] === 'Rahman'
              ? 'Good morning, Dr. Rahman'
              : teacher.name}
          </h1>
          <p className="text-sm text-muted-foreground">
            Your active classroom{' '}
            <span className="font-medium text-foreground">
              {activeClassroom.name}
            </span>{' '}
            is live with {activeClassroom.students} students enrolled.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:flex">
          <Button
            onClick={() =>
              toast.success('Session started', {
                description: 'CS 201 live session is now recording engagement.',
              })
            }
          >
            <Play data-icon="inline-start" />
            Start Session
          </Button>
          <Button variant="secondary" onClick={() => setQuizOpen(true)}>
            <FileQuestion data-icon="inline-start" />
            Launch Quiz
          </Button>
          <Button variant="secondary" onClick={() => setPollOpen(true)}>
            <Vote data-icon="inline-start" />
            Launch Poll
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast('Generating AI report…', {
                description: 'Your engagement digest will be ready shortly.',
              })
            }
          >
            <Sparkles data-icon="inline-start" />
            AI Report
          </Button>
        </div>
      </div>

      <PollModal open={pollOpen} onOpenChange={setPollOpen} />
      <QuizModal open={quizOpen} onOpenChange={setQuizOpen} />
    </Card>
  )
}

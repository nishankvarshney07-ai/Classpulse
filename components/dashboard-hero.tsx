'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

import Link from 'next/link'
export function DashboardHero() {
  

  return (
  <Card className="relative overflow-hidden border-border bg-gradient-to-br from-primary/15 via-card to-accent/10 p-6 md:p-8">
    <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary/20 blur-3xl" />

    <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">
          AI Classroom Engagement Platform
        </span>

        <h1 className="text-3xl font-bold tracking-tight">
          Welcome to ClassPulse
        </h1>

        <p className="max-w-2xl text-muted-foreground">
          Create classrooms, invite students using a classroom code, and track
          engagement through quizzes, polls, participation, and AI-powered
          insights.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button asChild size="lg">
         <Link href="/create-classroom">
               + Create Classroom
         </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/join-classroom">
          Join Classroom
         </Link>
        </Button>
      </div>
    </div>
  </Card>
)
}

'use client'

import { useState } from 'react'
import { Vote, Check, Radio } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

const pollOptions = [
  { id: 'a', label: 'O(1) — constant', votes: 6 },
  { id: 'b', label: 'O(log n) — logarithmic', votes: 22 },
  { id: 'c', label: 'O(n) — linear', votes: 9 },
  { id: 'd', label: 'O(n²) — quadratic', votes: 4 },
]

export function PollModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
}) {
  const [selected, setSelected] = useState<string | null>(null)
  const total = pollOptions.reduce((s, o) => s + o.votes, 0)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
              <Vote className="size-4" />
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-success/15 px-2 py-0.5 text-xs font-medium text-success">
              <Radio className="size-3" /> Live
            </span>
          </div>
          <DialogTitle className="text-pretty pt-2">
            What is the time complexity of search in a balanced BST?
          </DialogTitle>
          <DialogDescription>
            {total} responses · updating in real time
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-2.5 py-2">
          {pollOptions.map((opt) => {
            const pct = Math.round((opt.votes / total) * 100)
            const active = selected === opt.id
            return (
              <button
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className={cn(
                  'group relative overflow-hidden rounded-lg border px-3.5 py-3 text-left transition-colors',
                  active
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50',
                )}
              >
                <div
                  className="absolute inset-y-0 left-0 bg-accent/10"
                  style={{ width: `${pct}%` }}
                />
                <div className="relative flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    {active && <Check className="size-4 text-primary" />}
                    {opt.label}
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground">
                    {pct}%
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button onClick={() => onOpenChange(false)}>End Poll</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const quizOptions = [
  { id: 'a', label: 'A node with no children', correct: true, picked: 31 },
  { id: 'b', label: 'A node with one child', correct: false, picked: 5 },
  { id: 'c', label: 'The topmost node', correct: false, picked: 8 },
  { id: 'd', label: 'A node with two children', correct: false, picked: 3 },
]

export function QuizModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
}) {
  const [reveal, setReveal] = useState(false)
  const total = quizOptions.reduce((s, o) => s + o.picked, 0)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <span className="text-xs font-medium text-muted-foreground">
            Question 4 of 10 · Trees
          </span>
          <DialogTitle className="text-pretty">
            What defines a leaf node in a binary tree?
          </DialogTitle>
          <DialogDescription>
            {total} of 42 students answered · live analytics
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-2.5 py-2">
          {quizOptions.map((opt, i) => {
            const pct = Math.round((opt.picked / total) * 100)
            return (
              <div
                key={opt.id}
                className={cn(
                  'relative overflow-hidden rounded-lg border px-3.5 py-3',
                  reveal && opt.correct
                    ? 'border-success bg-success/10'
                    : 'border-border',
                )}
              >
                {reveal && (
                  <div
                    className={cn(
                      'absolute inset-y-0 left-0',
                      opt.correct ? 'bg-success/15' : 'bg-muted/40',
                    )}
                    style={{ width: `${pct}%` }}
                  />
                )}
                <div className="relative flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2.5 text-sm font-medium">
                    <span className="flex size-6 items-center justify-center rounded-md bg-secondary text-xs font-semibold">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {opt.label}
                  </span>
                  {reveal && (
                    <span
                      className={cn(
                        'text-sm font-semibold',
                        opt.correct
                          ? 'text-success'
                          : 'text-muted-foreground',
                      )}
                    >
                      {pct}%
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button onClick={() => setReveal((r) => !r)}>
            {reveal ? 'Hide Results' : 'Reveal Answer'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

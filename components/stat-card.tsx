import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type Tone = 'primary' | 'accent' | 'success' | 'warning' | 'destructive'

const toneMap: Record<Tone, string> = {
  primary: 'text-primary bg-primary/15',
  accent: 'text-accent bg-accent/15',
  success: 'text-success bg-success/15',
  warning: 'text-warning bg-warning/15',
  destructive: 'text-destructive bg-destructive/15',
}

export function StatCard({
  label,
  value,
  sub,
  delta,
  trend,
  tone,
}: {
  label: string
  value: string
  sub: string
  delta: string
  trend: 'up' | 'down'
  tone: Tone
}) {
  const TrendIcon = trend === 'up' ? ArrowUpRight : ArrowDownRight
  return (
    <Card className="gap-0 p-5">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <span
          className={cn(
            'flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold',
            toneMap[tone],
          )}
        >
          <TrendIcon className="size-3" />
          {delta}
        </span>
      </div>
      <p className="mt-3 text-3xl font-semibold tracking-tight tabular-nums">
        {value}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
    </Card>
  )
}

import { cn } from '@/lib/utils'
import type { StudentStatus } from '@/lib/data'

const map: Record<StudentStatus, string> = {
  Engaged: 'bg-success/15 text-success border-success/25',
  Moderate: 'bg-warning/15 text-warning border-warning/25',
  'At Risk': 'bg-destructive/15 text-destructive border-destructive/25',
}

export function StatusBadge({ status }: { status: StudentStatus }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium',
        map[status],
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  )
}

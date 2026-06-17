import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { StatusBadge } from '@/components/status-badge'
import { students, type Student } from '@/lib/data'
import { cn } from '@/lib/utils'

function ScoreCell({ value }: { value: number }) {
  const tone =
    value >= 80 ? 'text-success' : value >= 65 ? 'text-warning' : 'text-destructive'
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-secondary">
        <div
          className={cn(
            'h-full rounded-full',
            value >= 80 ? 'bg-success' : value >= 65 ? 'bg-warning' : 'bg-destructive',
          )}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className={cn('text-sm font-medium tabular-nums', tone)}>{value}</span>
    </div>
  )
}

export function StudentTable({
  data = students,
  title = 'Student Overview',
  description = 'Engagement and performance across the class',
}: {
  data?: Student[]
  title?: string
  description?: string
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="pl-6">Student</TableHead>
                <TableHead>Attendance</TableHead>
                <TableHead>Engagement</TableHead>
                <TableHead>Participation</TableHead>
                <TableHead>Quiz Accuracy</TableHead>
                <TableHead className="pr-6 text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((s) => (
                <TableRow key={s.id} className="group">
                  <TableCell className="pl-6">
                    <Link
                      href={`/students/${s.id}`}
                      className="flex items-center gap-3"
                    >
                      <Avatar className="size-9">
                        <AvatarFallback className="bg-secondary text-xs font-semibold">
                          {s.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col leading-tight">
                        <span className="text-sm font-medium group-hover:text-primary">
                          {s.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {s.roll}
                        </span>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell className="text-sm tabular-nums text-muted-foreground">
                    {s.attendance}%
                  </TableCell>
                  <TableCell>
                    <ScoreCell value={s.engagement} />
                  </TableCell>
                  <TableCell>
                    <ScoreCell value={s.participation} />
                  </TableCell>
                  <TableCell className="text-sm tabular-nums text-muted-foreground">
                    {s.quizAccuracy}%
                  </TableCell>
                  <TableCell className="pr-6 text-right">
                    <StatusBadge status={s.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

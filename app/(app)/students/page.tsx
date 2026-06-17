import { Users, ShieldAlert, TrendingUp, GraduationCap } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { StatCard } from '@/components/stat-card'
import { StudentTable } from '@/components/student-table'
import { Card } from '@/components/ui/card'
import { students } from '@/lib/data'

export default function StudentsPage() {
  const total = students.length
  const engaged = students.filter((s) => s.status === 'Engaged').length
  const atRisk = students.filter((s) => s.status === 'At Risk').length
  const avgAttendance = Math.round(
    students.reduce((s, x) => s + x.attendance, 0) / total,
  )

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <PageHeader
        title="Students"
        description="Track engagement, participation and performance for every learner"
      />

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card className="flex-row items-center gap-4 p-5">
          <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Users className="size-5" />
          </span>
          <div>
            <p className="text-2xl font-semibold tabular-nums">{total}</p>
            <p className="text-xs text-muted-foreground">Total Students</p>
          </div>
        </Card>
        <Card className="flex-row items-center gap-4 p-5">
          <span className="flex size-11 items-center justify-center rounded-xl bg-success/15 text-success">
            <TrendingUp className="size-5" />
          </span>
          <div>
            <p className="text-2xl font-semibold tabular-nums">{engaged}</p>
            <p className="text-xs text-muted-foreground">Highly Engaged</p>
          </div>
        </Card>
        <Card className="flex-row items-center gap-4 p-5">
          <span className="flex size-11 items-center justify-center rounded-xl bg-destructive/15 text-destructive">
            <ShieldAlert className="size-5" />
          </span>
          <div>
            <p className="text-2xl font-semibold tabular-nums">{atRisk}</p>
            <p className="text-xs text-muted-foreground">At Risk</p>
          </div>
        </Card>
        <Card className="flex-row items-center gap-4 p-5">
          <span className="flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
            <GraduationCap className="size-5" />
          </span>
          <div>
            <p className="text-2xl font-semibold tabular-nums">
              {avgAttendance}%
            </p>
            <p className="text-xs text-muted-foreground">Avg. Attendance</p>
          </div>
        </Card>
      </section>

      <StudentTable
        title="All Students"
        description={`${total} students enrolled in CS 201 — Data Structures`}
      />
    </div>
  )
}

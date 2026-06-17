import Link from 'next/link'
import { Radio, Users, ArrowRight } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const classrooms = [
  { id: 'cs201', name: 'CS 201 — Data Structures', section: 'Section A · Room 304', students: 48, engagement: 87, live: true },
  { id: 'cs140', name: 'CS 140 — Intro to Programming', section: 'Section B · Room 210', students: 62, engagement: 81, live: false },
  { id: 'cs330', name: 'CS 330 — Algorithms', section: 'Section A · Room 118', students: 39, engagement: 92, live: false },
  { id: 'cs410', name: 'CS 410 — Databases', section: 'Section C · Online', students: 54, engagement: 76, live: false },
]

export default function ClassroomsPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <PageHeader
        title="Classrooms"
        description="All the courses you teach this semester"
      />
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {classrooms.map((c) => (
          <Card key={c.id} className="transition-colors hover:border-primary/40">
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary font-semibold">
                  {c.name.split(' ')[1]}
                </span>
                {c.live ? (
                  <Badge variant="secondary" className="gap-1">
                    <span className="relative flex size-2">
                      <span className="absolute size-2 animate-ping rounded-full bg-success/70" />
                      <span className="size-2 rounded-full bg-success" />
                    </span>
                    Live
                  </Badge>
                ) : (
                  <Badge variant="outline">Idle</Badge>
                )}
              </div>
              <CardTitle className="pt-2 text-base text-pretty">
                {c.name}
              </CardTitle>
              <CardDescription>{c.section}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Users className="size-4" /> {c.students} students
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Radio className="size-4" /> {c.engagement}% avg
                </span>
              </div>
              <Button variant="secondary" className="w-full" render={<Link href="/" />}>
                Open Dashboard
                <ArrowRight data-icon="inline-end" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}

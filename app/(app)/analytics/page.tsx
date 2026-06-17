import { PageHeader } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  EngagementDistributionChart,
  ParticipationAnalyticsChart,
  QuizPerformanceChart,
  TopicBreakdownRadar,
} from '@/components/analytics-charts'
import { topicUnderstanding } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function AnalyticsPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <PageHeader
        title="Analytics"
        description="Deep insights into engagement, participation and comprehension"
        action={<Badge variant="secondary">CS 201 · This semester</Badge>}
      />

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Engagement Distribution</CardTitle>
            <CardDescription>Breakdown of students by engagement level</CardDescription>
          </CardHeader>
          <CardContent>
            <EngagementDistributionChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Participation Analytics</CardTitle>
            <CardDescription>Daily participation across the week</CardDescription>
          </CardHeader>
          <CardContent>
            <ParticipationAnalyticsChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quiz Performance Trends</CardTitle>
            <CardDescription>Accuracy across recent quiz topics</CardDescription>
          </CardHeader>
          <CardContent>
            <QuizPerformanceChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Topic Understanding Breakdown</CardTitle>
            <CardDescription>Comprehension radar across the syllabus</CardDescription>
          </CardHeader>
          <CardContent>
            <TopicBreakdownRadar />
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Topic Heatmap</CardTitle>
          <CardDescription>
            Class comprehension intensity across Data Structures topics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {topicUnderstanding.map((t) => {
              const tone =
                t.understanding >= 80
                  ? 'from-success/30 to-success/10 border-success/30'
                  : t.understanding >= 65
                    ? 'from-warning/30 to-warning/10 border-warning/30'
                    : 'from-destructive/30 to-destructive/10 border-destructive/30'
              const dot =
                t.understanding >= 80
                  ? 'text-success'
                  : t.understanding >= 65
                    ? 'text-warning'
                    : 'text-destructive'
              return (
                <div
                  key={t.topic}
                  className={cn(
                    'flex flex-col gap-2 rounded-xl border bg-gradient-to-br p-4',
                    tone,
                  )}
                >
                  <p className="text-sm font-medium text-pretty">{t.topic}</p>
                  <p className={cn('text-2xl font-semibold tabular-nums', dot)}>
                    {t.understanding}%
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.understanding >= 80
                      ? 'Strong grasp'
                      : t.understanding >= 65
                        ? 'Needs review'
                        : 'Reteach'}
                  </p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

import { DashboardHero } from '@/components/dashboard-hero'
import { StatCard } from '@/components/stat-card'
import {
  EngagementTrendChart,
  WeeklyEngagementChart,
  ActivityOverviewChart,
  TopicHeatmap,
} from '@/components/dashboard-charts'
import { LiveMonitoring } from '@/components/live-monitoring'
import { StudentTable } from '@/components/student-table'
import { quickStats } from '@/lib/data'

export default function DashboardPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <DashboardHero />

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
        {quickStats.map((s) => (
          <StatCard key={s.key} {...s} />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <EngagementTrendChart />
        <WeeklyEngagementChart />
      </section>

      <LiveMonitoring />

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ActivityOverviewChart />
        <TopicHeatmap />
      </section>

      <StudentTable />
    </div>
  )
}

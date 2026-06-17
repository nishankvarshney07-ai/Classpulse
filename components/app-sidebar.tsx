'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  School,
  Radio,
  Users,
  ChartLine,
  Sparkles,
  Settings,
  Activity,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { activeClassroom } from '@/lib/data'

const nav = [
  { label: 'Dashboard', href: '/', icon: LayoutDashboard },
  { label: 'Classrooms', href: '/classrooms', icon: School },
  { label: 'Live Session', href: '/live-session', icon: Radio },
  { label: 'Students', href: '/students', icon: Users },
  { label: 'Analytics', href: '/analytics', icon: ChartLine },
  { label: 'AI Reports', href: '/ai-reports', icon: Sparkles },
  { label: 'Settings', href: '/settings', icon: Settings },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-sidebar lg:flex">
      <div className="flex h-16 items-center gap-2.5 px-6">
        <div className="flex size-9 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
          <Activity className="size-5 text-primary-foreground" />
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-base font-semibold tracking-tight">
            ClassPulse
          </span>
          <span className="text-[11px] text-muted-foreground">
            Engagement AI
          </span>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
        {nav.map((item) => {
          const active =
            item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href)
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                active
                  ? 'bg-primary/15 text-foreground'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
              )}
            >
              <Icon
                className={cn(
                  'size-[18px]',
                  active && 'text-primary',
                )}
              />
              {item.label}
              {item.label === 'Live Session' && (
                <span className="ml-auto flex size-2 items-center justify-center">
                  <span className="absolute size-2 animate-ping rounded-full bg-success/70" />
                  <span className="size-2 rounded-full bg-success" />
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      <div className="m-3 rounded-xl border border-border bg-gradient-to-br from-primary/15 to-accent/10 p-4">
        <p className="text-xs font-medium text-muted-foreground">
          Active Classroom
        </p>
        <p className="mt-1 text-sm font-semibold leading-tight text-pretty">
          {activeClassroom.name}
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {activeClassroom.section}
        </p>
      </div>
    </aside>
  )
}

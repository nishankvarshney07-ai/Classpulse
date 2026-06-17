'use client'

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { studentFocusTrend } from '@/lib/data'

const config = {
  focus: { label: 'Focus Score', color: 'var(--chart-1)' },
}

export function FocusTrendChart() {
  return (
    <ChartContainer config={config} className="h-[220px] w-full">
      <AreaChart data={studentFocusTrend} margin={{ left: -16, right: 8, top: 8 }}>
        <defs>
          <linearGradient id="fillFocusTrend" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-focus)" stopOpacity={0.4} />
            <stop offset="95%" stopColor="var(--color-focus)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="week" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
        <YAxis tickLine={false} axisLine={false} fontSize={12} domain={[40, 100]} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area dataKey="focus" type="monotone" stroke="var(--color-focus)" fill="url(#fillFocusTrend)" strokeWidth={2.5} />
      </AreaChart>
    </ChartContainer>
  )
}

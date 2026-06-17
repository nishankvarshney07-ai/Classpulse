'use client'

import { Search, Bell, UserPlus, FileCheck2, Vote, Sparkles } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { teacher, activeClassroom, notifications } from '@/lib/data'
import { cn } from '@/lib/utils'

const notifIcon = {
  join: UserPlus,
  quiz: FileCheck2,
  poll: Vote,
  report: Sparkles,
}

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-xl md:px-6">
      <div className="relative hidden w-full max-w-sm md:block">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search students, sessions, topics…"
          className="h-9 border-border bg-secondary/60 pl-9 text-sm"
        />
      </div>

      <div className="ml-auto flex items-center gap-2 md:gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-border bg-secondary/60 py-1.5 pl-2.5 pr-3.5 sm:flex">
          <span className="relative flex size-2">
            <span className="absolute size-2 animate-ping rounded-full bg-success/70" />
            <span className="size-2 rounded-full bg-success" />
          </span>
          <span className="text-xs font-medium text-foreground">
            {activeClassroom.name}
          </span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="relative flex size-9 items-center justify-center rounded-lg border border-border bg-secondary/60 text-muted-foreground transition-colors hover:text-foreground">
            <Bell className="size-[18px]" />
            <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-primary ring-2 ring-background" />
            <span className="sr-only">Notifications</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="flex items-center justify-between">
              Notifications
              <Badge variant="secondary" className="text-[10px]">
                {notifications.length} new
              </Badge>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {notifications.map((n) => {
                const Icon = notifIcon[n.type]
                return (
                  <DropdownMenuItem key={n.id} className="items-start gap-3 py-2.5">
                    <span
                      className={cn(
                        'mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md',
                        n.type === 'report'
                          ? 'bg-primary/15 text-primary'
                          : 'bg-accent/15 text-accent',
                      )}
                    >
                      <Icon className="size-3.5" />
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="text-sm leading-snug text-foreground">
                        {n.text}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {n.time}
                      </span>
                    </span>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Separator orientation="vertical" className="hidden h-6 sm:block" />

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2.5 rounded-lg p-1 pr-2 transition-colors hover:bg-secondary">
            <Avatar className="size-8">
              <AvatarFallback className="bg-primary/20 text-xs font-semibold text-primary">
                {teacher.initials}
              </AvatarFallback>
            </Avatar>
            <div className="hidden flex-col items-start leading-none md:flex">
              <span className="text-sm font-medium">{teacher.name}</span>
              <span className="text-[11px] text-muted-foreground">
                Teacher
              </span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="flex flex-col gap-0.5">
              <span>{teacher.name}</span>
              <span className="text-xs font-normal text-muted-foreground">
                {teacher.email}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Preferences</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

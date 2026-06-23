'use client'

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b border-border bg-background/80 px-4 backdrop-blur-xl md:px-6">
      <div className="ml-auto">
        <div className="rounded-xl border border-border bg-card px-4 py-2">
          <p className="text-xs text-muted-foreground">
            Electron Monitoring
          </p>

          <p className="font-medium">
            No Active Session
          </p>
        </div>
      </div>
    </header>
  )
}
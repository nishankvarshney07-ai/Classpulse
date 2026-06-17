import { PageHeader } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel, FieldDescription } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { teacher } from '@/lib/data'

const toggles = [
  { label: 'Live engagement alerts', desc: 'Notify me when a student drops below threshold', on: true },
  { label: 'Auto-generate weekly AI reports', desc: 'Every Friday at 5:00 PM', on: true },
  { label: 'Poll & quiz sound effects', desc: 'Play a chime when responses arrive', on: false },
  { label: 'Email digests', desc: 'Send engagement summaries to my inbox', on: true },
]

export default function SettingsPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <PageHeader title="Settings" description="Manage your profile and preferences" />

      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Your public teaching profile</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Avatar className="size-16">
              <AvatarFallback className="bg-primary/20 text-xl font-semibold text-primary">
                {teacher.initials}
              </AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm">
              Change avatar
            </Button>
          </div>
          <FieldGroup className="sm:grid sm:grid-cols-2 sm:gap-4">
            <Field>
              <FieldLabel htmlFor="name">Full name</FieldLabel>
              <Input id="name" defaultValue={teacher.name} />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" type="email" defaultValue={teacher.email} />
            </Field>
            <Field className="sm:col-span-2">
              <FieldLabel htmlFor="title">Title</FieldLabel>
              <Input id="title" defaultValue={teacher.title} />
              <FieldDescription>Shown on reports and student-facing pages.</FieldDescription>
            </Field>
          </FieldGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notifications & AI</CardTitle>
          <CardDescription>Control alerts and automation</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col">
          {toggles.map((t, i) => (
            <div key={t.label}>
              <div className="flex items-center justify-between gap-4 py-3">
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium">{t.label}</p>
                  <p className="text-xs text-muted-foreground">{t.desc}</p>
                </div>
                <Switch defaultChecked={t.on} />
              </div>
              {i < toggles.length - 1 && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save changes</Button>
      </div>
    </div>
  )
}

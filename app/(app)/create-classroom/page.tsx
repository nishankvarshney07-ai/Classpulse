'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function CreateClassroomPage() {
  const [className, setClassName] = useState('')
  const [classCode, setClassCode] = useState('')
  const [description, setDescription] = useState('')

  const handleCreate = () => {
    toast.success('Classroom Created', {
      description: `${className} (${classCode}) created successfully.`,
    })
  }

  return (
    <div className="mx-auto max-w-3xl p-6">

        <Link
         href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          ← Back
        </Link>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            Create Classroom
          </CardTitle>

          <p className="text-sm text-muted-foreground">
            Create a classroom and share the class code with students.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Class Name</Label>

            <Input
              placeholder="DSA Batch A"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Class Code</Label>

            <Input
              placeholder="ABC123"
              value={classCode}
              onChange={(e) => setClassCode(e.target.value)}
            />
          </div>

         

          <Button
            className="w-full"
            onClick={handleCreate}
          >
            Create Classroom
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
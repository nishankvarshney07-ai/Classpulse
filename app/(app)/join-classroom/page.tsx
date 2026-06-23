'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { toast } from 'sonner'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function JoinClassroomPage() {
  const [classCode, setClassCode] = useState('')

  const handleJoin = () => {
  toast.success('Classroom joined successfully')
}
  return (
    <div className="mx-auto max-w-3xl p-6">

      <Link
        href="/"
        className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            Join Classroom
          </CardTitle>

          <p className="text-sm text-muted-foreground">
            Enter classroom details provided by your teacher.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">

        <div className="space-y-2">
       <Label>Class Code</Label>

        <Input
      placeholder="Enter classroom code"
      value={classCode}
      onChange={(e) => setClassCode(e.target.value)}
    />
  </div>

  <Button
    className="w-full"
    onClick={handleJoin}
  >
    Join Classroom
  </Button>

</CardContent>
      </Card>
    </div>
  )
}
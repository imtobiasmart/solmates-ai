'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function PracticeExercise() {
  const [code, setCode] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = () => {
    // In a real application, this would be validated or run through a code execution engine
    setFeedback("Great attempt! Here's some feedback on your code...")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Practice Exercise</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="code">Write a function that implements the concept you've just learned:</Label>
          <Textarea
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Type your code here..."
            className="font-mono"
            rows={10}
          />
        </div>
        {feedback && <p className="text-sm text-muted-foreground">{feedback}</p>}
        <Button onClick={handleSubmit}>Submit Code</Button>
      </CardContent>
    </Card>
  )
}


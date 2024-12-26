'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function KnowledgeCheck() {
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = () => {
    // In a real application, this would be validated against the correct answer
    setFeedback("Great attempt! Here's some feedback on your answer...")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Knowledge Check</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="answer">What is the main concept you've learned so far?</Label>
          <Input
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer..."
          />
        </div>
        {feedback && <p className="text-sm text-muted-foreground">{feedback}</p>}
        <Button onClick={handleSubmit}>Submit Answer</Button>
      </CardContent>
    </Card>
  )
}


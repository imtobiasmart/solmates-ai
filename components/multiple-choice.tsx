'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function MultipleChoice() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [feedback, setFeedback] = useState('')

  const handleSubmit = () => {
    // In a real application, this would be validated against the correct answer
    setFeedback("Good choice! Here's some explanation about the correct answer...")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Multiple Choice Question</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Which of the following best describes the concept you've just learned?</Label>
          <RadioGroup value={selectedAnswer || ''} onValueChange={setSelectedAnswer}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1" id="option1" />
              <Label htmlFor="option1">Option 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="2" id="option2" />
              <Label htmlFor="option2">Option 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3" id="option3" />
              <Label htmlFor="option3">Option 3</Label>
            </div>
          </RadioGroup>
        </div>
        {feedback && <p className="text-sm text-muted-foreground">{feedback}</p>}
        <Button onClick={handleSubmit}>Submit Answer</Button>
      </CardContent>
    </Card>
  )
}


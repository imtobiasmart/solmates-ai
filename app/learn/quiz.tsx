'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const SAMPLE_QUESTIONS = [
  {
    id: 1,
    question: "What is the most effective way to learn new information?",
    answer: "active recall",
    hint: "It involves testing yourself rather than passive reading"
  },
  {
    id: 2,
    question: "What learning technique involves spacing out study sessions over time?",
    answer: "spaced repetition",
    hint: "It's the opposite of cramming"
  },
  {
    id: 3,
    question: "What is the process of breaking down complex topics into smaller, manageable parts?",
    answer: "chunking",
    hint: "Think about how you might eat a large meal"
  }
]

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answer, setAnswer] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const handleSubmit = () => {
    const correct = answer.toLowerCase() === SAMPLE_QUESTIONS[currentQuestion].answer
    setIsCorrect(correct)
    if (correct && currentQuestion < SAMPLE_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1)
        setAnswer('')
        setIsCorrect(null)
        setShowHint(false)
      }, 1500)
    }
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Knowledge Check Quiz</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-4">
          <p className="text-lg font-medium">
            Question {currentQuestion + 1} of {SAMPLE_QUESTIONS.length}
          </p>
          <p className="text-xl">{SAMPLE_QUESTIONS[currentQuestion].question}</p>
          <Input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer..."
            className="max-w-md"
          />
          {showHint && (
            <p className="text-muted-foreground">
              Hint: {SAMPLE_QUESTIONS[currentQuestion].hint}
            </p>
          )}
          {isCorrect !== null && (
            <p className={isCorrect ? "text-green-600" : "text-red-600"}>
              {isCorrect ? "Correct!" : "Try again!"}
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="space-x-2">
        <Button onClick={handleSubmit}>Submit</Button>
        <Button variant="outline" onClick={() => setShowHint(true)}>
          Show Hint
        </Button>
      </CardFooter>
    </Card>
  )
}


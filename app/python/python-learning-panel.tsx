'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import PythonConsole from './python-console'

export default function PythonLearningPanel() {
  const [activeTab, setActiveTab] = useState('quiz')
  const [quizAnswer, setQuizAnswer] = useState('')
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null)
  const [practiceCode, setPracticeCode] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)

  const handleQuizSubmit = () => {
    setShowFeedback(true)
  }

  const handleChoiceSubmit = () => {
    setShowFeedback(true)
  }

  const handlePracticeSubmit = () => {
    setShowFeedback(true)
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex h-16 items-center justify-between border-b px-4">
        <h2 className="text-lg font-semibold gradient-text">Python Learning Activities</h2>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="quiz">Knowledge Check</TabsTrigger>
            <TabsTrigger value="multiple-choice">Multiple Choice</TabsTrigger>
            <TabsTrigger value="practice">Practice Exercise</TabsTrigger>
          </TabsList>
          <TabsContent value="quiz" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="gradient-text">Knowledge Check</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>What is a lambda function in Python?</Label>
                  <Input
                    value={quizAnswer}
                    onChange={(e) => setQuizAnswer(e.target.value)}
                    placeholder="Type your answer..."
                  />
                </div>
                {showFeedback && (
                  <div className="text-sm text-muted-foreground">
                    A lambda function is a small, anonymous function in Python that can have any number of arguments but can only have one expression. It's often used for short, simple operations.
                  </div>
                )}
                <Button onClick={handleQuizSubmit} className="button ripple">Submit Answer</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="multiple-choice" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="gradient-text">Multiple Choice Question</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Which of the following is a correct use of a decorator in Python?</Label>
                  <RadioGroup value={selectedChoice || ''} onValueChange={setSelectedChoice}>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1" id="option1" />
                        <Label htmlFor="option1">@decorator</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2" id="option2" />
                        <Label htmlFor="option2">#decorator</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3" id="option3" />
                        <Label htmlFor="option3">$decorator</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
                {showFeedback && (
                  <div className="text-sm text-muted-foreground">
                    The correct answer is @decorator. In Python, decorators are applied using the @ symbol followed by the decorator name.
                  </div>
                )}
                <Button onClick={handleChoiceSubmit} className="button ripple">Submit Answer</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="practice" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="gradient-text">Practice Exercise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Write a lambda function that takes two arguments and returns their sum:</Label>
                  <Input
                    value={practiceCode}
                    onChange={(e) => setPracticeCode(e.target.value)}
                    placeholder="add = lambda ..."
                  />
                </div>
                {showFeedback && (
                  <div className="text-sm text-muted-foreground">
                    A correct answer would be: add = lambda x, y: x + y
                    This creates a lambda function that takes two arguments and returns their sum.
                  </div>
                )}
                <Button onClick={handlePracticeSubmit} className="button ripple">Check Answer</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <h3 className="text-lg font-semibold gradient-text mb-4">Python Console</h3>
          <PythonConsole />
        </div>
      </div>
    </div>
  )
}


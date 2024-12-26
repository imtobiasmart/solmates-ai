'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PythonConsole() {
  const [code, setCode] = useState(`# Try out the Python concepts you've learned!

# Example 1: Lambda Functions
square = lambda x: x**2
numbers = [1, 2, 3, 4, 5]
squared_numbers = list(map(square, numbers))
print("Squared numbers:", squared_numbers)

# Example 2: Decorators
def uppercase_decorator(func):
  def wrapper():
      result = func()
      return result.upper()
  return wrapper

@uppercase_decorator
def greet():
  return "hello, world"

print("Decorated function output:", greet())`)
  const [output, setOutput] = useState('')

  const runCode = async () => {
    try {
      const response = await fetch('/api/python-run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })

      if (!response.ok) {
        throw new Error('Failed to execute code')
      }

      const result = await response.json()
      setOutput(result.output)
    } catch (error) {
      setOutput('Error: ' + (error as Error).message)
    }
  }

  return (
    <Card className="h-full flex flex-col bg-[#1e1e1e] border-gray-700">
      <CardHeader className="border-b border-gray-700">
        <CardTitle className="text-gray-300">Python Console</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 flex-1 flex flex-col p-0">
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your Python code here..."
          className="flex-1 font-mono text-sm bg-[#1e1e1e] text-gray-300 border-none resize-none p-4"
          style={{ minHeight: '200px' }}
        />
        <div className="p-4 pt-0">
          <Button onClick={runCode} className="w-full bg-[#4d4d4d] hover:bg-[#5a5a5a] text-white">
            Run Code
          </Button>
        </div>
        <div className="bg-[#2d2d2d] p-4 rounded-b-lg flex-1">
          <h3 className="font-semibold mb-2 text-gray-300">Output:</h3>
          <pre className="whitespace-pre-wrap text-green-400 font-mono text-sm">{output}</pre>
        </div>
      </CardContent>
    </Card>
  )
}


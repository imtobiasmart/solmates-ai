'use client'

import { useEffect, useRef } from "react"

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const initialMessages: Message[] = [
  { role: 'assistant', content: "Welcome to your Python Advanced Functions lesson! Let's start by discussing lambda functions. What do you know about them?" },
  { role: 'user', content: "I've heard of lambda functions, but I'm not entirely sure how they work or when to use them." },
  { role: 'assistant', content: "Great question! Lambda functions, also known as anonymous functions, are small, one-time use functions that you can define without using the 'def' keyword. They're useful for simple operations, especially when you need a quick function for things like sorting or filtering. Here's a simple example:\n\n```python\nsquare = lambda x: x**2\nprint(square(5))  # Output: 25\n```\n\nIn this case, we've created a lambda function that squares a number. Can you think of a situation where this might be useful?" },
  { role: 'user', content: "Maybe when you're working with lists and need to apply a simple operation to each element?" },
  { role: 'assistant', content: "Exactly! Lambda functions are often used with built-in functions like map(), filter(), and sort(). For example, if you have a list of numbers and want to square each one, you could do:\n\n```python\nnumbers = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, numbers))\nprint(squared)  # Output: [1, 4, 9, 16, 25]\n```\n\nHere, map() applies the lambda function to each element in the list. Do you see how this could be more concise than writing a full function definition?" },
  { role: 'user', content: "Yes, that makes sense. It seems really useful for these quick, one-off operations." },
  { role: 'assistant', content: "Exactly! You're catching on quickly. Lambda functions are great for these scenarios where you need a simple function and don't want to define a full function using 'def'. They're particularly useful in functional programming concepts.\n\nNow, let's move on to another advanced function concept: decorators. Have you encountered decorators in Python before?" },
  { role: 'user', content: "I've seen the @ symbol used sometimes before function definitions, but I'm not sure what it does." },
  { role: 'assistant', content: "Good observation! The @ symbol is indeed related to decorators. A decorator is a function that takes another function as an argument and extends or modifies its behavior without explicitly changing its source code. It's a powerful way to add functionality to functions or methods.\n\nHere's a simple example:\n\n```python\ndef uppercase_decorator(func):\n    def wrapper():\n        result = func()\n        return result.upper()\n    return wrapper\n\n@uppercase_decorator\ndef greet():\n    return 'hello, world'\n\nprint(greet())  # Output: HELLO, WORLD\n```\n\nIn this example, `uppercase_decorator` is a function that takes another function (`func`) as an argument. It defines a new function `wrapper` that calls `func`, converts its result to uppercase, and returns it. The `@uppercase_decorator` line applies this decorator to the `greet` function.\n\nCan you think of a practical use case for decorators?" },
]

export default function PythonAIChat() {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] overflow-y-auto p-4 space-y-4">
      {initialMessages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] rounded-lg px-4 py-2 ${
              message.role === 'user'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted'
            }`}
          >
            {message.content.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}


'use client'

import {useState, useRef, useEffect} from "react"
import {Button} from "@/components/ui/button"
import {Card} from "@/components/ui/card"
import {MessageSquare, Send} from 'lucide-react'
import {useChat} from 'ai/react'
import {Alert, AlertDescription} from "@/components/ui/alert"

const SYSTEM_PROMPT = `You are an intelligent learning assistant designed to create personalized learning experiences using the sciences of learning. Your role is to help users achieve their goals through tailored learning plans, interactive activities, and adaptive feedback.

Follow these steps:

1. Understand the User: Ask the user about their learning goals, current level, and preferred learning style.
2. Generate a Learning Plan:
 - Break down the user's goal into achievable daily milestones.
 - Incorporate principles like spaced repetition, active learning, and scaffolding.
 - Suggest tools or resources (e.g., flashcards, quizzes, conversation partners).
3. Adapt to Feedback:
 - Ask for feedback after every activity or milestone.
 - Use the feedback to refine the plan and offer improved activities.
4. Track Progress:
 - Summarize progress regularly with motivational updates.
 - Visualize completion percentage, milestones achieved, and areas of focus.

Be proactive and engaging. Always adapt recommendations based on user input and progress. Use language that is motivating and clear.`

interface AIChatProps {
    chatId?: string,
    onTopicComplexityChange?: (isComplex: boolean) => void
}

export default function AIChat({chatId, onTopicComplexityChange}: AIChatProps) {
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const {messages, input, handleInputChange, handleSubmit, isLoading, error} = useChat({
        api: '/api/chat',
        initialMessages: [
            {id: crypto.randomUUID(), role: 'system', content: SYSTEM_PROMPT},
            {
                id: crypto.randomUUID(),
                role: 'assistant',
                content: "Hi! I'm your personalized learning assistant. What would you like to learn today?"
            }
        ],
        onError: (error) => {
            console.error('Chat error:', error)
            const errorMsg = error?.message || 'An error occurred. Please try again.'
            setErrorMessage(errorMsg)
            // Clear error after 5 seconds
            setTimeout(() => setErrorMessage(null), 5000)
        },
        onFinish: () => {
            setErrorMessage(null)
        }
    })
    const messagesEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    const handleFormSubmit = async (e: React.FormEvent) => {
        try {
            setErrorMessage(null)
            await handleSubmit(e)
        } catch (error) {
            console.error('Form submission error:', error)
        }
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto space-y-4 p-4">
                {messages.map((message, index) => (
                    message.role !== 'system' && (
                        <div key={index}
                             className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div
                                className={`max-w-[70%] p-2 rounded-lg ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                {message.content}
                            </div>
                        </div>
                    )
                ))}
                {errorMessage && (
                    <Alert variant="destructive">
                        <AlertDescription>{errorMessage}</AlertDescription>
                    </Alert>
                )}
                <div ref={messagesEndRef}/>
            </div>
            <Card className="m-4">
                <form onSubmit={handleFormSubmit} className="flex items-center space-x-2 p-2">
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type your message..."
                        className="flex-1 px-3 py-2 border rounded-md"
                        disabled={isLoading}
                    />
                    <Button type="submit" disabled={isLoading}>
                        <Send className="h-4 w-4 mr-2"/>
                        Send
                    </Button>
                </form>
            </Card>
        </div>
    )
}


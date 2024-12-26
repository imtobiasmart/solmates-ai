'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import AIChat from '../../ai-chat'
import LearningPanel from '../../learning-panel'
import { ChatSidebar } from "@/components/chat-sidebar"

export default function ChatPage() {
  const params = useParams()
  const chatId = params.id as string
  const [isComplexTopic, setIsComplexTopic] = useState(false)

  const handleTopicComplexityChange = (isComplex: boolean) => {
    setIsComplexTopic(isComplex)
  }

  return (
    <div className="flex h-screen">
      <ChatSidebar />
      <div className="flex-1 flex">
        <div className="flex-1 border-r bg-muted/50">
          <AIChat chatId={chatId} onTopicComplexityChange={handleTopicComplexityChange} />
        </div>
        <div className="w-1/3">
          <LearningPanel isComplexTopic={isComplexTopic} />
        </div>
      </div>
    </div>
  )
}


'use client'

import Link from 'next/link'
import { Brain } from 'lucide-react'
import { Button } from "@/components/ui/button"
import PythonAIChat from './python-ai-chat'
import PythonLearningPanel from './python-learning-panel'

export default function PythonLearnPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex h-16 items-center justify-between border-b px-4">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <Brain className="h-6 w-6" />
          <span className="font-bold">Solmates.ai</span>
        </Link>
        <Link href="/dashboard">
          <Button variant="ghost" size="sm">Dashboard</Button>
        </Link>
      </div>
      <div className="flex flex-1 overflow-hidden">
        {/* Left Side - AI Chat */}
        <div className="w-1/2 border-r bg-muted/50 overflow-auto">
          <PythonAIChat />
        </div>

        {/* Right Side - Learning Activities */}
        <div className="w-1/2 overflow-auto">
          <PythonLearningPanel />
        </div>
      </div>
    </div>
  )
}


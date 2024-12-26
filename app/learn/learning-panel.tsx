'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import KnowledgeCheck from './knowledge-check'
import MultipleChoice from './multiple-choice'
import PracticeExercise from './practice-exercise'
import { MiniPDFViewer } from './mini-pdf-viewer'

interface LearningPanelProps {
  isComplexTopic: boolean;
}

export default function LearningPanel({ isComplexTopic }: LearningPanelProps) {
  const [activeTab, setActiveTab] = useState('knowledge-check')

  return (
    <div className="h-full flex flex-col">
      <div className="flex h-16 items-center justify-between border-b px-4">
        <h2 className="text-lg font-semibold gradient-text">Learning Activities</h2>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="knowledge-check">Knowledge Check</TabsTrigger>
            <TabsTrigger value="multiple-choice">Multiple Choice</TabsTrigger>
            <TabsTrigger value="practice">Practice Exercise</TabsTrigger>
          </TabsList>
          <TabsContent value="knowledge-check" className="mt-4">
            <KnowledgeCheck />
          </TabsContent>
          <TabsContent value="multiple-choice" className="mt-4">
            <MultipleChoice />
          </TabsContent>
          <TabsContent value="practice" className="mt-4">
            <PracticeExercise />
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Additional Resources</h3>
          <MiniPDFViewer />
        </div>
      </div>
    </div>
  )
}


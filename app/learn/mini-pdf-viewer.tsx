'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronUp, Download } from 'lucide-react'

const Section = ({ title, content }: { title: string; content: string }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2 gradient-text">{title}</h3>
    <p className="text-sm text-muted-foreground whitespace-pre-line">{content}</p>
  </div>
)

export function MiniPDFViewer() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        setShowScrollTop(contentRef.current.scrollTop > 100)
      }
    }

    const currentRef = contentRef.current
    currentRef?.addEventListener('scroll', handleScroll)

    return () => {
      currentRef?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDownload = () => {
    // Placeholder for download functionality
    alert('PDF download functionality will be implemented here.')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border shadow-lg">
        <CardHeader className="gradient-bg text-white p-4 flex justify-between items-center">
          <CardTitle className="text-xl font-bold">Getting Started with Your Solmate</CardTitle>
          <Button variant="ghost" size="icon" onClick={handleDownload}>
            <Download className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div ref={contentRef} className="h-[400px] overflow-y-auto p-6 relative">
            <Section
              title="How to Ask Questions"
              content={`Interact naturally with the AI by typing your questions or requests. For example:

• "Explain blockchain basics in simple terms."
• "Can you summarize this smart contract concept?"
• "Help me create a study schedule for Python programming."`}
            />
            <Section
              title="AI Capabilities"
              content={`The AI can:

• Explain complex concepts in simple terms.
• Generate personalized study schedules.
• Provide real-time feedback on quizzes and exercises.
• Track your learning progress and suggest improvements.`}
            />
            <Section
              title="Tips for Better Interaction"
              content={`To get the best experience:

• Be specific with your questions.
• Provide examples when asking for help.
• Use the "Practice Exercises" tab to test your knowledge.`}
            />
            {showScrollTop && (
              <Button
                variant="outline"
                size="icon"
                className="absolute bottom-4 right-4 rounded-full"
                onClick={scrollToTop}
              >
                <ChevronUp className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}


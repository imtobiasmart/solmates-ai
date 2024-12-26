'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    front: "What is active recall?",
    back: "A learning technique where you test your knowledge by trying to remember information without looking at the source material."
  },
  {
    id: 2,
    front: "What is spaced repetition?",
    back: "A learning technique where you review information at gradually increasing intervals to optimize long-term retention."
  },
  {
    id: 3,
    front: "What is the Pomodoro Technique?",
    back: "A time management method using 25-minute focused work sessions followed by short breaks."
  }
]

export default function Flashcards() {
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const nextCard = () => {
    if (currentCard < SAMPLE_FLASHCARDS.length - 1) {
      setCurrentCard(prev => prev + 1)
      setIsFlipped(false)
    }
  }

  const previousCard = () => {
    if (currentCard > 0) {
      setCurrentCard(prev => prev - 1)
      setIsFlipped(false)
    }
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Flashcards</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md aspect-video relative">
          <div
            className="w-full h-full cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isFlipped ? 'back' : 'front'}
                initial={{ rotateY: -180, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 180, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full bg-card border rounded-lg p-6 flex items-center justify-center text-center absolute backface-hidden"
              >
                <p className="text-xl">
                  {isFlipped
                    ? SAMPLE_FLASHCARDS[currentCard].back
                    : SAMPLE_FLASHCARDS[currentCard].front}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Button onClick={previousCard} disabled={currentCard === 0}>
          Previous
        </Button>
        <p className="text-sm text-muted-foreground">
          {currentCard + 1} of {SAMPLE_FLASHCARDS.length}
        </p>
        <Button onClick={nextCard} disabled={currentCard === SAMPLE_FLASHCARDS.length - 1}>
          Next
        </Button>
      </CardFooter>
    </Card>
  )
}


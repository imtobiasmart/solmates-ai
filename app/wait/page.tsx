'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Brain, CheckCircle2 } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function WaitPage() {
  const [email, setEmail] = useState('')
  const [useCase, setUseCase] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !useCase) {
      setError('Please fill in all fields')
      return
    }

    try {
      // In a real implementation, this would send data to your backend
      // For now, we'll just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      setError('')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5 flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-4xl p-4">
        <Link href="/" className="flex items-center space-x-2 w-fit">
          <Brain className="h-6 w-6 text-primary" />
          <span className="font-bold gradient-text text-lg">Solmates.ai</span>
        </Link>
      </header>

      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center px-4 w-full max-w-4xl">
        <div className="w-full flex flex-col items-center justify-center space-y-8 text-center">
          <Brain className="h-16 w-16 text-primary" />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
            Join the Solmates Beta
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Be among the first to experience personalized AI-powered learning. Sign up for early access to Solmates and help shape the future of education.
          </p>

          {isSubmitted ? (
            <Card className="w-full max-w-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <CheckCircle2 className="h-12 w-12 text-green-500" />
                  <CardTitle>Thank You for Your Interest!</CardTitle>
                  <CardDescription className="text-center">
                    We've received your request for beta access. We'll be in touch soon with next steps. In the meantime, follow us on social media for updates.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Request Beta Access</CardTitle>
                <CardDescription>
                  Tell us how you plan to use Solmates to enhance your learning journey.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="useCase">How would you use Solmates?</Label>
                    <Textarea
                      id="useCase"
                      placeholder="Tell us what you'd like to learn and how Solmates could help..."
                      value={useCase}
                      onChange={(e) => setUseCase(e.target.value)}
                      required
                    />
                  </div>
                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  <Button type="submit" className="w-full button ripple">
                    Request Access
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}


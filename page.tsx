import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, MessageSquare, BarChart, Target, BookOpen, Zap, Bot } from 'lucide-react'
import dynamic from 'next/dynamic'

const ChatWidget = dynamic(() => import('./chat-widget'), { ssr: false })

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-6 w-6" />
            <span className="font-bold">Solmates.ai</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact Us
            </Link>
          </nav>
          <Link href="/learn">
            <Button>Get Started for Free</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Your AI Tutor for Mastering Any Skill
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Solmates.ai leverages the sciences of learning and AI to create tailored learning experiences. Whether you're
              mastering a new language or sharpening your professional skills, Solmates provides a path uniquely designed for
              you.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Link href="/learn">
              <Button size="lg">Get Started for Free</Button>
            </Link>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container py-24 space-y-8">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Target className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Personalized Plans</CardTitle>
              </CardHeader>
              <CardContent>
                Customized learning paths that adapt to your goals, pace, and learning style.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MessageSquare className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Real-Time Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                Instant, actionable feedback to help you improve and stay motivated.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BarChart className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                Visualize your learning journey with detailed analytics and insights.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container py-24 space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">Core Features</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Zap className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Dynamic Learning Plans</CardTitle>
              </CardHeader>
              <CardContent>
                Adaptive learning paths that evolve with your progress.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Brain className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>AI-Driven Adaptability</CardTitle>
              </CardHeader>
              <CardContent>
                Smart algorithms that understand and adapt to your learning style.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Bot className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Interactive Chat Support</CardTitle>
              </CardHeader>
              <CardContent>
                24/7 AI tutor assistance to answer questions and provide guidance.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BookOpen className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Multimodal Learning Tools</CardTitle>
              </CardHeader>
              <CardContent>
                Diverse learning resources including text, audio, and interactive exercises.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="container py-24 space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-4">
              <div className="mx-auto rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">1. Set Your Goal</h3>
              <p className="text-muted-foreground">Tell us what you want to learn and we'll create your personalized plan.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">2. Follow Your Plan</h3>
              <p className="text-muted-foreground">Complete daily activities designed specifically for your learning style.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                <BarChart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">3. Achieve and Track Progress</h3>
              <p className="text-muted-foreground">Monitor your improvement and celebrate your learning milestones.</p>
            </div>
          </div>
        </section>

        {/* Chat Integration Section */}
        <section className="container py-24 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Start Learning Today</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Chat with your AI tutor now and get a personalized learning plan in minutes.
            </p>
            <Button size="lg" className="mt-4">
              Chat with Your AI Tutor Now
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Brain className="h-6 w-6" />
                <span className="font-bold">Solmates.ai</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Your personalized AI learning companion.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-medium">Legal</h3>
                <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                  <Link href="#">Terms of Service</Link>
                  <Link href="#">Privacy Policy</Link>
                </nav>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Connect</h3>
                <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                  <Link href="#">LinkedIn</Link>
                  <Link href="#">Twitter</Link>
                  <Link href="#">Facebook</Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  )
}


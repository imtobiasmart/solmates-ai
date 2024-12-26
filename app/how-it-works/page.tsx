import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, CheckSquare, BotIcon as Robot, Award } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const Step = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center space-y-4">
    <div className="rounded-full bg-primary/10 p-4 w-20 h-20 flex items-center justify-center">
      <Icon className="w-10 h-10 text-primary" />
    </div>
    <h3 className="text-xl font-bold gradient-text">{title}</h3>
    <p className="text-muted-foreground max-w-sm">{description}</p>
  </div>
)

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      <Header />

      <main className="container mx-auto max-w-7xl py-24 space-y-24">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
            How It Works
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Discover how Solmates.ai revolutionizes your learning journey in three simple steps.
          </p>
        </section>

        <section className="grid gap-12 md:grid-cols-3">
          <Step
            icon={CheckSquare}
            title="Sign Up and Set Your Goals"
            description="Create an account in seconds, and tell us what you want to learn or achieve."
          />
          <Step
            icon={Robot}
            title="Learn with AI-Powered Tutoring"
            description="Dive into personalized courses designed by your Solmate to match your pace, style, and goals."
          />
          <Step
            icon={Award}
            title="Earn Blockchain-Verified Credentials"
            description="Complete courses and get certified. Share credentials securely with employers or institutions."
          />
        </section>

        <section className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold gradient-text">Powered by LearnLM</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Solmates.ai is powered by LearnLM, a cutting-edge language model designed specifically for education. Our platform is enhanced by rigorous research in the sciences of learning, incorporating proven techniques such as{' '}
            <span className="font-semibold text-primary">spaced repetition</span>,{' '}
            <span className="font-semibold text-secondary">retrieval practice</span>, and{' '}
            <span className="font-semibold text-accent">personalized adaptive learning</span>{' '}
            to optimize your learning experience.
          </p>
        </section>

        <section className="text-center">
          <Link href="/wait">
            <Button size="lg" className="button ripple text-lg px-8 py-6 hover:scale-105 transition-transform">
              Get Started Now
            </Button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, MessageSquare, Target, BarChart, Users, Zap, Lightbulb } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card className="hover:shadow-lg transition-all duration-300">
    <CardHeader>
      <Icon className="w-10 h-10 mb-2 text-primary" />
      <CardTitle className="text-xl font-semibold gradient-text">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
)

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto max-w-7xl py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 animate-gradient"></div>
          <div className="relative z-10 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
              Features That Redefine Learning
            </h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
              Solmates is your learning companion, offering a conversational experience powered by AI and built on the Science of Learning. From mastering skills to applying them in real-world scenarios, your Solmate is here to guide you every step of the way.
            </p>
            <Link href="/learn">
              <Button size="lg" className="mt-8 button ripple hover:scale-105 transition-transform">
                Meet Your Mate
              </Button>
            </Link>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="container mx-auto max-w-7xl py-24 space-y-12">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl gradient-text">
            What Can Your Solmate Do?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={MessageSquare}
              title="Conversation-Based Learning"
              description="Engage in interactive, natural conversations with your Solmate to learn concepts, solve problems, and build critical thinking skills."
            />
            <FeatureCard
              icon={Target}
              title="Personalized Learning Paths"
              description="Your Solmate adapts to your learning style, pace, and goals, creating a plan tailored just for you."
            />
            <FeatureCard
              icon={Brain}
              title="Scenario-Based Skill Application"
              description="Learn how to apply your skills in diverse, real-world contexts with guided practice and simulations."
            />
            <FeatureCard
              icon={Lightbulb}
              title="Critical Thinking Prompts"
              description="Your Mate doesn't just teach you facts—it challenges you to think critically and explore new perspectives."
            />
            <FeatureCard
              icon={Zap}
              title="Instant Feedback"
              description="Receive actionable feedback in real time to refine your skills and stay motivated."
            />
            <FeatureCard
              icon={BarChart}
              title="Progress Tracking"
              description="Track your growth with detailed analytics and milestones, celebrating your achievements along the way."
            />
            <FeatureCard
              icon={Users}
              title="Collaboration Tools"
              description="Collaborate with peers on projects or challenges while your Mate facilitates learning and feedback."
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto max-w-7xl py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text mb-4">
            Ready to Meet Your Solmate?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl mb-8">
            Start your personalized learning journey with Solmates and experience a new way of mastering skills.
          </p>
          <Link href="/learn">
            <Button size="lg" className="button ripple hover:scale-105 transition-transform">
              Start Your Personalized Journey
            </Button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, MessageSquare, Zap } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <Card className="card hover-scale">
    <CardHeader>
      <Icon className="w-12 h-12 mb-2 text-primary" />
      <CardTitle className="text-xl font-semibold gradient-text">{title}</CardTitle>
    </CardHeader>
    <CardContent>{description}</CardContent>
  </Card>
)

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="font-bold gradient-text text-lg">Solmates.ai</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/why-solmates" className="text-sm font-medium hover:text-primary transition-colors">
              Why Solmates?
            </Link>
          </nav>
          <Link href="/wait">
            <Button className="button ripple hover:scale-105 transition-transform">Start Learning</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 animate-gradient"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-4">
            <div className="text-center space-y-8">
              <div className="space-y-4 animate-fade-in">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
                  Your Personalized Learning Companion
                </h1>
                <p className="mx-auto max-w-2xl text-muted-foreground md:text-xl">
                  Solmates leverages AI and cognitive science to create a Mate uniquely tailored to your learning style and goals.
                </p>
              </div>
              <div className="flex justify-center gap-4 animate-slide-up">
                <Link href="/wait">
                  <Button size="lg" className="button ripple hover:scale-105 transition-transform">Discover Your Solmate</Button>
                </Link>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline" className="hover:bg-secondary hover:text-white transition-colors">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Solmates? Section */}
        <section className="w-full py-24">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl gradient-text mb-12">Why Solmates?</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <FeatureCard
                icon={Brain}
                title="Built on the Science of Learning"
                description="Our platform is grounded in proven educational research and cognitive science principles."
              />
              <FeatureCard
                icon={Zap}
                title="Personalized and Adaptive AI"
                description="Experience a truly personalized learning journey that evolves as you progress."
              />
              <FeatureCard
                icon={MessageSquare}
                title="A Trusted Learning Partner"
                description="Engage in interactive discussions and receive constant encouragement from your Solmate."
              />
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="w-full py-24">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl gradient-text mb-12">See Solmates in Action</h2>
            <div className="w-full">
              <iframe
                src="https://www.loom.com/embed/4e55c7e6024f4c028ad07038069c1a97?sid=11c01c93-110e-4398-aabb-0fb0a96b5dbb"
                frameBorder="0"
                allowFullScreen
                className="w-full aspect-video rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center space-y-4 animate-slide-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">Start Your Learning Journey Today</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground md:text-xl">
                Join the beta and be among the first to experience the future of personalized learning.
              </p>
              <Link href="/wait">
                <Button size="lg" className="mt-4 button ripple hover:scale-105 transition-transform">Join the Beta</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-background/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Brain className="h-6 w-6 text-primary" />
                <span className="font-bold gradient-text">Solmates.ai</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Empowering learners through AI-driven education.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-medium gradient-text">Legal</h3>
                <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                  <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                  <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                </nav>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium gradient-text">Connect</h3>
                <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                  <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
                  <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
                  <Link href="#" className="hover:text-primary transition-colors">Instagram</Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


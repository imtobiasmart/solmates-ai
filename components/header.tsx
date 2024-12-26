import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain } from 'lucide-react'

export default function Header() {
  return (
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
  )
}


import Link from "next/link"
import { Brain } from 'lucide-react'

export default function Footer() {
  return (
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
  )
}


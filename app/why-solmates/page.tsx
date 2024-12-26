import { Metadata } from 'next'
import WhySolmatesContent from "./WhySolmatesContent";

export const metadata: Metadata = {
  title: 'Why Choose Solmates? | Solmates.ai',
  description: 'Discover why Solmates is your best choice for AI-powered personalized learning.',
}

export default function WhySolmatesPage() {
  return <WhySolmatesContent />
}


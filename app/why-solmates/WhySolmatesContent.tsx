'use client'

import {useState} from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import {Brain, CheckCircle, XCircle} from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const FeatureComparison = () => {
    const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

    const features = [
        {
            name: 'Personalization',
            solmates: true,
            others: false,
            description: 'Tailored learning paths that adapt to your unique needs and progress.'
        },
        {
            name: 'Science-backed learning',
            solmates: true,
            others: false,
            description: 'Rooted in cognitive science principles for optimal learning outcomes.'
        },
        {
            name: 'Career outcomes',
            solmates: true,
            others: false,
            description: 'Focus on skills and knowledge aligned with professional goals.'
        },
        {
            name: 'Verifiable credentials',
            solmates: true,
            others: false,
            description: 'Blockchain-backed certifications for your achievements.'
        },
        {
            name: 'Global accessibility',
            solmates: true,
            others: true,
            description: 'Learn from anywhere, anytime, with multilingual support.'
        },
        {
            name: 'Collaboration tools',
            solmates: true,
            others: false,
            description: 'Engage with peers and mentors for enhanced learning experiences.'
        },
        {
            name: 'Adaptive AI feedback',
            solmates: true,
            others: false,
            description: 'Real-time, personalized feedback to optimize your learning process.'
        },
    ]

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[200px]">Feature</TableHead>
                    <TableHead>Solmates</TableHead>
                    <TableHead>Others</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {features.map((feature) => (
                    <TableRow
                        key={feature.name}
                        onMouseEnter={() => setHoveredFeature(feature.name)}
                        onMouseLeave={() => setHoveredFeature(null)}
                        className="cursor-pointer"
                    >
                        <TableCell>{feature.name}</TableCell>
                        <TableCell>{feature.solmates ? <CheckCircle className="text-green-500"/> :
                            <XCircle className="text-red-500"/>}</TableCell>
                        <TableCell>{feature.others ? <CheckCircle className="text-green-500"/> :
                            <XCircle className="text-red-500"/>}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            {hoveredFeature && (
                <div className="mt-4 p-4 bg-secondary/10 rounded-md">
                    <p>{features.find(f => f.name === hoveredFeature)?.description}</p>
                </div>
            )}
        </Table>
    )
}

export default function WhySolmatesContent() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header/>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="container mx-auto max-w-7xl py-24 text-center relative overflow-hidden">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 animate-gradient"></div>
                    <div className="relative z-10 space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
                            Why Choose Solmates?
                        </h1>
                        <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
                            We're more than just an AI tutor. Solmates is built on the Science of Learning and designed
                            to be your personalized Solmate. Here's what makes us different and why learners trust us to
                            help them succeed.
                        </p>
                        <Link href="/wait">
                            <Button size="lg" className="mt-8 button ripple hover:scale-105 transition-transform">
                                Try Solmates Today
                            </Button>
                        </Link>
                    </div>
                </section>

                {/* Our Unique Approach */}
                <section className="container mx-auto max-w-7xl py-24 space-y-12">
                    <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl gradient-text">
                        What Sets Solmates Apart?
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle>Our Unique Approach</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <Brain className="mr-2 h-5 w-5 text-primary"/>
                                        <span>Rooted in cognitive science: Built on proven methods like active recall, spaced repetition, and metacognitive strategies.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Brain className="mr-2 h-5 w-5 text-primary"/>
                                        <span>Personalized AI Mates: Learning paths designed just for you, adapting in real time to your progress.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Brain className="mr-2 h-5 w-5 text-primary"/>
                                        <span>Community-driven learning: Collaborate, compete, and grow with peers while supported by your Mate.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Brain className="mr-2 h-5 w-5 text-primary"/>
                                        <span>Career-ready outcomes: Go beyond academics—gain credentials and skills aligned with your goals.</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                        <div className="flex items-center justify-center">
                            {/* Placeholder for infographic or illustration */}
                            <div
                                className="w-full h-64 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-lg flex items-center justify-center text-white">
                                Infographic Placeholder
                            </div>
                        </div>
                    </div>
                </section>

                {/* Competitive Edge */}
                <section
                    className="container mx-auto max-w-7xl py-24 space-y-12 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-xl">
                    <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl gradient-text">
                        Why Solmates Over Other Tools?
                    </h2>
                    <p className="text-center text-lg text-muted-foreground">
                        Unlike others that stop at practice quizzes and flashcards, Solmates focuses on your long-term
                        growth—academically and professionally.
                    </p>
                    <FeatureComparison/>
                </section>

                {/* Built for Everyone */}
                <section
                    className="container mx-auto max-w-7xl py-24 space-y-12 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-xl">
                    <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl gradient-text">
                        Who Is Solmates For?
                    </h2>
                    <p className="text-center text-lg text-muted-foreground">
                        Students preparing for exams, professionals upskilling, and lifelong learners. Accessible for
                        global learners with multilingual support and diverse learning paths.
                    </p>
                    <div className="grid gap-8 md:grid-cols-3">
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle>Students</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Ace your exams and build a strong foundation for your future career with personalized
                                study plans.
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle>Professionals</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Stay ahead in your field with cutting-edge skills and knowledge tailored to your career
                                goals.
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle>Lifelong Learners</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Explore new interests and hobbies with a learning companion that adapts to your pace and
                                style.
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Why We're the Future of Learning */}
                <section className="container mx-auto max-w-7xl py-24 space-y-12">
                    <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl gradient-text">
                        A Vision for Smarter Learning
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle>The Future of Learning</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <Brain className="mr-2 h-5 w-5 text-primary"/>
                                        <span>Blockchain for verifiable credentials: Secure, tamper-proof certifications for your achievements.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Brain className="mr-2 h-5 w-5 text-primary"/>
                                        <span>AI that evolves with your learning style: Continuously adapting to provide the most effective learning experience.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Brain className="mr-2 h-5 w-5 text-primary"/>
                                        <span>Building global communities of learners and professionals: Connect, collaborate, and grow together.</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle>Founder's Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <blockquote className="text-lg italic">
                                    "At Solmates, we're not just building an AI tutor. We're creating a learning
                                    ecosystem that empowers everyone to reach their full potential through the Science
                                    of Learning. Our vision is a world where quality education is accessible to all, and
                                    where learning is a lifelong journey of growth and discovery."
                                </blockquote>
                                <p className="mt-4 text-right font-semibold">- Dr. Emily Chen, Founder & CEO</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="container mx-auto max-w-7xl py-24 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text mb-4">
                        Ready to Learn Smarter?
                    </h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl mb-8">
                        Join thousands of learners who've made Solmates their learning companion.
                    </p>
                    <Link href="/wait">
                        <Button size="lg" className="button ripple hover:scale-105 transition-transform">
                            Get Started with Solmates
                        </Button>
                    </Link>
                </section>
            </main>

            <Footer/>
        </div>
    )
}


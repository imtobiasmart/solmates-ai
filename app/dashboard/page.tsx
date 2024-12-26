'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Brain, Trophy, Clock, Calendar, Target, Book, Award, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

// Sample data - in a real app, this would come from an API
const learningGoals = [
  {
    id: 1,
    title: "Learn Python Programming",
    progress: 65,
    hoursSpent: 24,
    streak: 7,
    lastActive: "2 hours ago",
    certificates: ["Basic Python", "Data Structures"],
    nextMilestone: "Complete Advanced Functions Module"
  },
  {
    id: 2,
    title: "Master Web Development",
    progress: 40,
    hoursSpent: 16,
    streak: 4,
    lastActive: "1 day ago",
    certificates: ["HTML & CSS"],
    nextMilestone: "Complete JavaScript Basics"
  },
  {
    id: 3,
    title: "Data Science Fundamentals",
    progress: 25,
    hoursSpent: 8,
    streak: 2,
    lastActive: "3 days ago",
    certificates: [],
    nextMilestone: "Complete Statistics Module"
  }
]

const achievements = [
  { icon: Clock, label: "Total Learning Hours", value: "48" },
  { icon: Calendar, label: "Longest Streak", value: "7 days" },
  { icon: Book, label: "Projects Completed", value: "12" },
  { icon: Award, label: "Certificates Earned", value: "3" }
]

export default function DashboardPage() {
  const [selectedGoal, setSelectedGoal] = useState(learningGoals[0])

  return (
    <div className="min-h-screen bg-pattern px-4 md:px-6">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="font-bold gradient-text text-lg">Solmates.ai</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/learn">
              <Button variant="ghost" className="nav-link">Continue Learning</Button>
            </Link>
            <Link href="/learn">
              <Button className="button ripple">New Goal</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold tracking-tight gradient-text">Welcome back!</h1>
          <p className="text-muted-foreground">Track your progress and achieve your learning goals.</p>
        </div>

        {/* Achievement Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card hover-scale animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {achievement.label}
                </CardTitle>
                <achievement.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold gradient-text">{achievement.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Goals Section */}
        <div className="grid gap-8 md:grid-cols-12">
          {/* Goals List */}
          <Card className="md:col-span-4 card">
            <CardHeader>
              <CardTitle className="gradient-text">Learning Goals</CardTitle>
              <CardDescription>Select a goal to view details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {learningGoals.map((goal) => (
                <div
                  key={goal.id}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedGoal.id === goal.id
                      ? 'bg-primary/10'
                      : 'hover:bg-muted'
                  }`}
                  onClick={() => setSelectedGoal(goal)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{goal.title}</h3>
                    <Badge variant="secondary">{goal.progress}%</Badge>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Selected Goal Details */}
          <div className="md:col-span-8 space-y-4">
            <Card className="card">
              <CardHeader>
                <CardTitle className="gradient-text">{selectedGoal.title}</CardTitle>
                <CardDescription>
                  Last active {selectedGoal.lastActive}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Hours Spent</p>
                    <p className="text-2xl font-bold gradient-text">{selectedGoal.hoursSpent}h</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Current Streak</p>
                    <p className="text-2xl font-bold gradient-text">{selectedGoal.streak} days</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Certificates</p>
                    <p className="text-2xl font-bold gradient-text">{selectedGoal.certificates.length}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium gradient-text">Next Milestone</h4>
                  <Card className="hover-scale">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Target className="h-8 w-8 text-primary" />
                        <span>{selectedGoal.nextMilestone}</span>
                      </div>
                      <Link href="/python">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>

                {selectedGoal.certificates.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium gradient-text">Earned Certificates</h4>
                    <div className="grid gap-2">
                      {selectedGoal.certificates.map((certificate, index) => (
                        <Card key={index} className="hover-scale">
                          <CardContent className="p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <Trophy className="h-5 w-5 text-primary" />
                              <span>{certificate}</span>
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => window.open('#', '_blank')}
                              className="rounded-full"
                            >
                              View
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}


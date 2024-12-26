'use client'

import Link from "next/link"
import { useRouter } from 'next/navigation'
import { Brain, Plus, BookOpen, FolderKanban, MessageSquare, MessagesSquare } from 'lucide-react'
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'

type Chat = {
  id: string;
  title: string;
  lastMessage: string;
}

export function ChatSidebar() {
  const router = useRouter()
  const [recentChats, setRecentChats] = useState<Chat[]>([])

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchRecentChats = () => {
      const chats: Chat[] = [
        { id: '1', title: "Personalized learning plan", lastMessage: "Let's create a study schedule" },
        { id: '2', title: "Python basics discussion", lastMessage: "Can you explain variables?" },
        { id: '3', title: "Math problem solving", lastMessage: "How do I solve quadratic equations?" },
        { id: '4', title: "Study schedule planning", lastMessage: "I need help organizing my time" },
        { id: '5', title: "Learning style assessment", lastMessage: "What's my best way to learn?" }
      ]
      setRecentChats(chats)
    }

    fetchRecentChats()
  }, [])

  const handleNewChat = () => {
    const newChatId = Date.now().toString()
    const newChat: Chat = {
      id: newChatId,
      title: "New Conversation",
      lastMessage: "How can I help you today?"
    }
    setRecentChats(prevChats => [newChat, ...prevChats])
    router.push(`/learn/chat/${newChatId}`)
  }

  return (
    <Sidebar collapsible="none" className="w-64 border-r">
      <SidebarHeader className="border-b p-4">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <Brain className="h-6 w-6" />
          <span className="font-bold">Solmates.ai</span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-4 space-y-6">
        <Button onClick={handleNewChat} className="w-full">
          <Plus className="mr-2 h-4 w-4" /> New Chat
        </Button>

        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard" className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/projects" className="flex items-center space-x-2">
                <FolderKanban className="h-4 w-4" />
                <span>Projects</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/feedback" className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4" />
                <span>Feedback</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarGroup>
          <SidebarGroupLabel>Recent Chats</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {recentChats.map((chat) => (
                <SidebarMenuItem key={chat.id}>
                  <SidebarMenuButton
                    onClick={() => router.push(`/learn/chat/${chat.id}`)}
                    className="flex items-center space-x-2 w-full"
                  >
                    <MessagesSquare className="h-4 w-4" />
                    <span className="truncate">{chat.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}


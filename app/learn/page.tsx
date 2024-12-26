'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LearnPage() {
  const router = useRouter()

  useEffect(() => {
    const newChatId = Date.now().toString()
    router.push(`/learn/chat/${newChatId}`)
  }, [router])

  return (
    <div className="flex h-screen items-center justify-center">
      <p>Redirecting to a new chat...</p>
    </div>
  )
}


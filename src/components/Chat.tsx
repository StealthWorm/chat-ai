'use client'

import { useChat } from 'ai/react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { ScrollArea } from './ui/scroll-area'

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  return (
    // grid grid-rows-[min-content_1fr_min-content]
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chatbot</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ScrollArea className="h-[600px] w-full pr-4">
          {messages.map(message => {
            return (
              <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>TS</AvatarFallback>
                    <AvatarImage src="https://github.com/stealthworm.png" />
                  </Avatar>
                )}

                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>RS</AvatarFallback>
                    <AvatarImage src="https://github.com/rocketseat.png" />
                  </Avatar>
                )}

                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">{message.role === 'user' ? 'User' : 'Chatbot'}:</span>
                  {message.content}
                </p>
              </div>
            )
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}
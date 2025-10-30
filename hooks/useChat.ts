"use client"

import * as React from "react"

export interface ChatMessage { role: "user" | "assistant"; content: string }

export function useChat(initial?: ChatMessage[]) {
	const [messages, setMessages] = React.useState<ChatMessage[]>(initial || [])
	const send = (text: string) => {
		setMessages(prev => [...prev, { role: "user", content: text }])
		setTimeout(() => setMessages(prev => [...prev, { role: "assistant", content: "Placeholder response." }]), 250)
	}
	return { messages, send }
}

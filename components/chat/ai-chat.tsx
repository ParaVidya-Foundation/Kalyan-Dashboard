"use client"

import React from "react"
import ChatInput from "./chat-input"
import MessageBubble from "./message-bubble"

export default function AIChat() {
	const [messages, setMessages] = React.useState<{ role: "user" | "assistant"; content: string }[]>([
		{ role: "assistant", content: "Hi! Ask me anything about your Kundli." },
	])

	async function onSend(text: string) {
		if (!text.trim()) return
		setMessages(prev => [...prev, { role: "user", content: text }])
		// Placeholder AI reply
		setTimeout(() => {
			setMessages(prev => [...prev, { role: "assistant", content: "This is a placeholder AI response." }])
		}, 300)
	}

	return (
		<div className="flex flex-col h-full border rounded-xl bg-white">
			<div className="flex-1 overflow-y-auto p-4 space-y-3">
				{messages.map((m, i) => (
					<MessageBubble key={i} role={m.role} content={m.content} />
				))}
			</div>
			<div className="border-t p-2">
				<ChatInput onSend={onSend} />
			</div>
		</div>
	)
}

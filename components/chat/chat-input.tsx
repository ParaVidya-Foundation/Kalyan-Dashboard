"use client"

import React from "react"

export default function ChatInput({ onSend }: { onSend: (text: string) => void }) {
	const [text, setText] = React.useState("")
	return (
		<form
			className="flex items-center gap-2"
			onSubmit={(e) => {
				e.preventDefault()
				onSend(text)
				setText("")
			}}
		>
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Type your question..."
				className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
				aria-label="Chat message"
			/>
			<button
				type="submit"
				className="rounded-lg bg-orange-600 px-3 py-2 text-sm font-medium text-white hover:bg-orange-700"
				aria-label="Send message"
			>
				Send
			</button>
		</form>
	)
}

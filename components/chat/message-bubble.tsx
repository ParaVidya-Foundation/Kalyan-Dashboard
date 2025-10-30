"use client"

export default function MessageBubble({ role, content }: { role: "user" | "assistant"; content: string }) {
	const isUser = role === "user"
	return (
		<div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
			<div
				className={`${isUser ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-900"} rounded-2xl px-3 py-2 text-sm max-w-[75%]`}
				role="status"
				aria-live="polite"
			>
				{content}
			</div>
		</div>
	)
}

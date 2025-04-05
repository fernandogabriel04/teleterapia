import React from "react"

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: React.ReactNode
}

export default function Textarea({ icon, ...props }: TextareaProps) {
  return (
    <div className="relative w-full h-full">
      <span className="absolute left-8 top-4 text-muted-foreground">
        {icon}
      </span>
      <textarea
        {...props}
        className="text-zinc-100 pl-16 w-full h-full pt-2 rounded-3xl bg-zinc-950 bg-opacity-20 resize-none placeholder:text-sm placeholder:text-zinc-100 placeholder:relative placeholder:top-2"
      />
    </div>
  )
}

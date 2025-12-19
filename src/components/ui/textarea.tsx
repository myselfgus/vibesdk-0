import * as React from "react"

import { cn } from "@/lib/utils"

interface TextareaProps extends React.ComponentProps<"textarea"> {
  label?: string
}

function Textarea({ className, label, ...props }: TextareaProps) {
  const textareaElement = (
    <textarea
      data-slot="textarea"
      className={cn(
        "neu-inset w-full min-h-[100px] px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/40 outline-none resize-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-teal/30",
        "aria-invalid:border-[#C44536]/30 aria-invalid:ring-[#C44536]/10",
        className
      )}
      {...props}
    />
  )

  if (label) {
    return (
      <div className="space-y-2">
        <label className="text-xs font-bold text-text-secondary uppercase tracking-wider ml-1">
          {label}
        </label>
        {textareaElement}
      </div>
    )
  }

  return textareaElement
}

export { Textarea }

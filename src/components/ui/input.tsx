import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  label?: string
}

function Input({ className, type, label, ...props }: InputProps) {
  const inputElement = (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "neu-inset w-full px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/40 outline-none",
        "file:text-text-primary file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
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
        {inputElement}
      </div>
    )
  }

  return inputElement
}

export { Input }

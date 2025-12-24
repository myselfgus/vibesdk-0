import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-[#f0f0f0] placeholder:text-[oklch(0.5_0.05_0)] focus-visible:border-[oklch(0.5_0.12_195)] focus-visible:ring-[oklch(0.5_0.12_195_/_0.3)] aria-invalid:ring-[oklch(0.55_0.2_25_/_0.2)] dark:aria-invalid:ring-[oklch(0.55_0.2_25_/_0.4)] aria-invalid:border-[oklch(0.55_0.2_25)] dark:bg-[oklch(0.22_0.02_0_/_0.3)] flex field-sizing-content min-h-16 w-full rounded-lg border bg-transparent px-3 py-2 text-base shadow-[1px_2px_4px_-1px_rgba(121,121,121,0.4)] transition-all duration-200 outline-none focus-visible:ring-[2px] focus-visible:shadow-[2px_3px_7px_-1px_rgba(121,121,121,0.85)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }

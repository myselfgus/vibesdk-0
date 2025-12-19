"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-6 w-12 shrink-0 items-center rounded-full p-1 transition-colors duration-300 outline-none",
        "data-[state=checked]:bg-teal/20 data-[state=unchecked]:bg-[#F4F4F2]",
        "data-[state=unchecked]:shadow-[inset_4px_4px_12px_rgba(0,0,0,0.04),inset_-4px_-4px_12px_rgba(255,255,255,0.7)]",
        "dark:data-[state=unchecked]:bg-[#1F1F1D]",
        "dark:data-[state=unchecked]:shadow-[inset_4px_4px_12px_rgba(0,0,0,0.2),inset_-4px_-4px_12px_rgba(255,255,255,0.02)]",
        "focus-visible:ring-teal/30 focus-visible:ring-[3px]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-4 rounded-full shadow-sm ring-0 transition-transform duration-300",
          "data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0",
          "data-[state=checked]:bg-teal data-[state=unchecked]:bg-gray-300",
          "dark:data-[state=unchecked]:bg-gray-500"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 active:scale-[0.98] cursor-pointer",
  {
    variants: {
      variant: {
        default: "voither-btn",
        destructive: "bg-[oklch(0.55_0.2_25)] text-white shadow-[2px_3px_7px_-1px_rgba(121,121,121,0.85)] rounded-lg hover:opacity-90",
        outline: "voither-btn-secondary",
        secondary: "voither-btn-secondary",
        ghost: "text-[oklch(0.5_0.05_0)] shadow-none bg-transparent hover:bg-[oklch(0.92_0.0_0)]",
        link: "text-[oklch(0.2_0.04_0)] underline-offset-4 hover:underline shadow-none",
      },
      size: {
        default: "h-10 px-6 py-3",
        sm: "h-8 rounded-lg gap-1.5 px-4 py-2 text-xs",
        lg: "h-12 rounded-lg px-8 py-4",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 active:scale-95 cursor-pointer",
  {
    variants: {
      variant: {
        default: "neu-btn",
        destructive: "bg-health-danger text-white shadow-md rounded-xl hover:opacity-90",
        outline: "neu-btn-secondary",
        secondary: "neu-btn-secondary",
        ghost: "text-health-text-sub shadow-none bg-transparent hover:bg-health-bg/50",
        link: "text-health-dark underline-offset-4 hover:underline shadow-none",
      },
      size: {
        default: "h-10 px-6 py-3",
        sm: "h-8 rounded-xl gap-1.5 px-4 py-2 text-xs",
        lg: "h-12 rounded-xl px-8 py-4",
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

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-teal/10 text-teal border-teal/20",
        secondary:
          "border-transparent bg-bg-2 text-text-secondary [a&]:hover:bg-bg-2/90",
        destructive:
          "bg-[#C44536]/10 text-[#C44536] border-[#C44536]/20",
        outline:
          "bg-transparent text-text-primary border-text-primary/20",
        dark:
          "bg-text-primary text-text-inverted border-transparent",
        success:
          "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20",
        warning:
          "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

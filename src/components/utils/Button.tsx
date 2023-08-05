import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center tracking-[3px] font-display justify-center text-[18px] transition-colors hover:bg-transparent focus:outline-none  disabled:opacity-50  disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-ace-gold text-white hover:bg-transparent hover:text-ace-black hover:outline hover:outline-1 hover:outline-ace-gold focus:outline focus:outline-1 focus:outline-ace-gold",
        destructive: "text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent text-ace-gold hover:text-white hover:bg-ace-black outline outline-1 outline-black",
        subtle: "hover:bg-zinc-200 bg-white text-black",
        ghost:
          "bg-transparent hover:bg-white text-zinc-800 data-[state=open]:bg-transparent data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-12 py-2 px-8",
        sm: "h-9 px-2",
        xs: "h-8 px-1.5",
        lg: "w-full h-12 px-8 ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ArrowDownRight, Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center uppercase font-display justify-end text-xl transition-colors hover:bg-transparent  disabled:opacity-50  disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-ace-gold text-ace-black border-b border-t-2 border-ace-black hover:bg-transparent hover:text-ace-black hover:outline-t-[1px] hover:outline-b-2 hover:outline-ace-black focus:outline focus:outline-1 focus:outline-ace-gold",
        destructive: "text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent text-ace-black border-y hover:bg-ace-gold outline outline-2 outline-ace-black",
        link: "bg-transparent text-ace-black hover:bg-ace-gold outline outline-2 outline-ace-black",
      },
      size: {
        default: "h-14 py-2",
        sm: "h-9 px-2",
        xs: "h-8 px-1.5",
        lg: "w-full h-14",
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
        <span className="ml-1">
          <ArrowDownRight size={30} />
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

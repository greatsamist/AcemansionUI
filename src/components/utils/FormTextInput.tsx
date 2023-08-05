import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

interface FormTextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const FormTextInput = forwardRef<HTMLInputElement, FormTextInputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-14 w-full border border-ace-gold bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
FormTextInput.displayName = "FormTextInput";

export { FormTextInput };

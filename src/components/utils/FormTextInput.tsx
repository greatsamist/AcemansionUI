import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";
import FormLabel from "./FormLabel";

interface FormTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
}

const FormTextInput = forwardRef<HTMLInputElement, FormTextInputProps>(
  ({ className = "", labelName, ...props }, ref) => {
    return (
      <>
        <FormLabel labelName={labelName} />
        <input
          className={cn(
            "flex h-10 mb-6 w-full border-b-2 border-ace-black bg-transparent font-display text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground placeholder:text-lg placeholder:font-display focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </>
    );
  }
);
FormTextInput.displayName = "FormTextInput";

export { FormTextInput };

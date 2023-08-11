import { Button } from "../utils/Button";
import { FormTextInput } from "../utils/FormTextInput";
import { FormSelect } from "../utils/FormSelect";
import { useReducer } from "react";
import { defaultReducer } from "../../lib/utils";

import { SERVICES_OPTIONS, defaultContactForm } from "../../constants/contact";

interface ContactFormProps {
  isWhiteBorder?: boolean;
  buttonClassName?: string;
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "link"
    | null
    | undefined;
}

const ContactForm = ({
  isWhiteBorder,
  buttonClassName,
  buttonVariant,
}: ContactFormProps) => {
  const [formState, setFormState] = useReducer(defaultReducer, {
    defaultContactForm,
  });

  return (
    <form className="flex flex-col">
      <FormTextInput
        placeholder="Name"
        labelName="Name"
        type="text"
        required
        isWhiteBorder={isWhiteBorder}
        value={formState.name}
        onChange={(name) => setFormState({ name })}
      />
      <FormTextInput
        placeholder="Email"
        labelName="Email"
        type="email"
        required
        isWhiteBorder={isWhiteBorder}
        value={formState.email}
        onChange={(email) => setFormState({ email })}
      />
      <FormSelect
        labelName="I'm Interested In"
        options={SERVICES_OPTIONS}
        required
        value={formState.service}
        isWhiteBorder={isWhiteBorder}
        onChange={(service) => setFormState({ service })}
      />

      <Button variant={buttonVariant} className={buttonClassName}>
        Contact Us
      </Button>
    </form>
  );
};

export default ContactForm;

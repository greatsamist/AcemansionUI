import { Button } from "../utils/Button";
import { FormTextInput } from "../utils/FormTextInput";
import { FormSelect } from "../utils/FormSelect";
import { useReducer, useState } from "react";
import { defaultReducer } from "../../lib/utils";
import emailjs from "@emailjs/browser";

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
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = () => {
    setIsLoading(true);

    const formData = {
      name: formState.name,
      email: formState.email,
      service: formState.service.title,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID || "",
        import.meta.env.VITE_TEMPLATE_ID || "",
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        () => {
          setMessage(
            "🎉🎉🎉 Message Sent! We will be in touch with you shortly"
          );
          setFormState(defaultContactForm);

          setIsLoading(false);
        },
        (error) => {
          setMessage("Error occurred: Please contact acemansiontech@gmail.com");
          setIsLoading(false);
          console.log(error.text);
        }
      );
  };

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

      <Button
        variant={buttonVariant}
        className={buttonClassName}
        disabled={isLoading}
        onClick={handleFormSubmit}
      >
        Contact Us
      </Button>
      <h6 className="mt-5 text-xl text-ace-gold">{message}</h6>
    </form>
  );
};

export default ContactForm;

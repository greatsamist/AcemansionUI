import PageTitle from "../utils/PageTitle";
import aboutImage from "../../assets/images/home/hero-2.jpg";
import { FormTextInput } from "../utils/FormTextInput";
import FormLabel from "../utils/FormLabel";
import { useReducer } from "react";
import { defaultReducer } from "../../lib/utils";
import { Button } from "../utils/Button";

const SERVICES_OPTIONS = [
  {
    title: "Promotional Video",
    value: "1",
  },
];

const defaultContactForm = {
  name: "",
  email: "",
  service: "",
};

const HomeContactUs = () => {
  const [formState, setFormState] = useReducer(defaultReducer, {
    defaultContactForm,
  });
  return (
    <div className="container mx-auto px-4">
      <PageTitle title="Contact Us Today To learn how we can help bring your vision to life" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="">
          <img className="object-cover" src={aboutImage} />
        </div>

        <form className="flex flex-col">
          <FormTextInput
            placeholder="Name"
            labelName="Name"
            type="name"
            required
            value={formState.name}
            onChange={(name) => setFormState({ name })}
          />
          <FormTextInput
            placeholder="Email"
            labelName="Email"
            type="email"
            required
            value={formState.email}
            onChange={(email) => setFormState({ email })}
          />
          <FormLabel
            labelName="I'm Interested In"
            options={SERVICES_OPTIONS}
            required
            value={formState.service}
            onChange={(service) => setFormState({ service })}
          />
          <Button>Contact Us</Button>
        </form>
      </div>
    </div>
  );
};

export default HomeContactUs;

import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FormTextArea } from "../utils/FormTextArea";
import { FormTextInput } from "../utils/FormTextInput";
import { Button } from "../utils/Button";

const HomeContactUs = () => {
  return (
    <div className="container mx-auto px-4 mt-10 flex items-center justify-center gap-24">
      <div className="basis-1/2 text-right">
        <h6 className="tracking-[8px] mb-6">Collaborate</h6>
        <h3 className="text-[65px] mb-6 tracking-wider leading-none">
          Want To <span className="block">Work With </span>Us? Leave Us A
          Message!
        </h3>
        <div className="flex items-center justify-end gap-5">
          <AiFillInstagram size={22} />
          <AiFillYoutube size={22} />
          <AiOutlineTwitter size={22} />
        </div>
      </div>

      <div className="basis-1/2">
        <FormTextArea className="h-20" placeholder="Type your message" />
        <div className="flex gap-4 my-3">
          <FormTextInput placeholder="Your Name" type="text" />
          <FormTextInput placeholder="Your Name" type="email" />
        </div>
        <Button size="lg" isLoading={false}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default HomeContactUs;

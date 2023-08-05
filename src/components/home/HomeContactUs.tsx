import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FormTextArea } from "../utils/FormTextArea";
import { FormTextInput } from "../utils/FormTextInput";
import { Button } from "../utils/Button";
import { Link } from "react-router-dom";

const HomeContactUs = () => {
  return (
    <div className="container mx-auto px-4 mt-14 flex items-top justify-center gap-28">
      <div className="basis-1/2 flex flex-col text-right">
        <h6 className="tracking-[8px] mb-6 text-ace-gold">Collaborate</h6>
        <h3 className="text-[65px] text-ace-black mb-6 tracking-wider self-end leading-none">
          Want To Work <span className="block">With Us? Leave Us</span> A
          Message!
        </h3>
        <div className="flex items-center justify-end gap-5">
          <Link
            to="https://www.instagram.com/acemansion/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram size={22} color="#2E2E2E" />
          </Link>
          <Link to="" target="_blank" rel="noopener noreferrer">
            <AiFillYoutube size={22} color="#2E2E2E" />
          </Link>
          <Link to="" target="_blank" rel="noopener noreferrer">
            <AiOutlineTwitter size={22} color="#2E2E2E" />
          </Link>
          <Link
            to="https://www.tiktok.com/@acemansionstudios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok size={18} color="#2E2E2E" />
          </Link>
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

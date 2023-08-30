import { useState } from "react";
import { COLORS, cn } from "../../lib/utils";
import { ArrowRightCircle } from "lucide-react";
import { Reveal } from "./Reveal";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Reveal width="100%">
      <div
        className={cn(
          isOpen ? "bg-ace-gold" : "border-2 border-ace-gold",
          "text-white"
        )}
      >
        <div
          className={cn(
            "p-6 cursor-pointer flex justify-between",
            isOpen ? "items-start" : "items-center"
          )}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="basis-4/5">
            <h5 className="text-xl">{question}</h5>
            {isOpen && <p>{answer}</p>}
          </div>

          {isOpen ? (
            <ArrowRightCircle
              size={60}
              className="-rotate-[45deg] fill-white"
              color={COLORS.aceBlack}
            />
          ) : (
            <ArrowRightCircle
              size={60}
              className="rotate-[45deg] fill-ace-gold"
              color={COLORS.aceBlack}
            />
          )}
        </div>
      </div>
    </Reveal>
  );
};

export default Accordion;

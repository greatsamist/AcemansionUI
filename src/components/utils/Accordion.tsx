import { useState } from "react";
import { COLORS, cn } from "../../lib/utils";
import { ArrowRightCircle } from "lucide-react";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={cn(
        isOpen ? "bg-ace-gold" : "border-2 border-ace-gold",
        "text-white"
      )}
    >
      <div
        className="p-6 cursor-pointer flex items-center justify-between"
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
  );
};

export default Accordion;

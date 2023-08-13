import { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { COLORS } from "../../lib/utils";

interface Props {
  children: JSX.Element | ReactNode;
  width?: "fit-content" | "100%";
  bg?: string;
  className?: string;
  position?: "left" | "right" | "bottom";
}

export const Reveal = ({
  children,
  width = "fit-content",
  bg,
  className,
  position = "bottom",
}: Props) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  const startPosition = {
    left: { opacity: 0, x: -75 },
    right: { opacity: 0, x: 75 },
    bottom: { opacity: 0, y: 75 },
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: startPosition[position],
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className={className}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background:
            bg == "gold"
              ? COLORS.aceGold
              : bg == "black"
              ? COLORS.aceBlack
              : "",
          zIndex: 20,
        }}
      />
    </div>
  );
};

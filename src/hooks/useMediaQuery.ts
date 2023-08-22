import { useMediaQuery as useRRMediaQuery } from "react-responsive";

const useMediaQuery = () => {
  const isLargeScreen = useRRMediaQuery({
    query: "(min-width: 1536px)",
  });

  const isMobile = useRRMediaQuery({
    query: "(max-width: 900px)",
  });
  return { isLargeScreen, isMobile };
};

export default useMediaQuery;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopPageChange = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

export default ScrollToTopPageChange;

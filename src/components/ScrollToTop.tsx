import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, state } = useLocation();
  const navigate = useNavigate();
  const shouldSkipScrollToTop = useRef(false);

  useEffect(() => {
    // Case 1: State-based scroll (Back button with explicit target)
    if (state && state.targetId) {
      const element = document.getElementById(state.targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          // Clear the state so refresh doesn't trigger it again
          shouldSkipScrollToTop.current = true;
          navigate(pathname, { replace: true, state: {} });
        }, 100);
      }
      return;
    }

    // Case 2: Hash-based scroll (Direct URL access)
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      return;
    }

    // Case 3: Default Scroll to Top
    if (shouldSkipScrollToTop.current) {
      shouldSkipScrollToTop.current = false;
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, state, navigate]);

  return null;
}

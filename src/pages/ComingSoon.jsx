import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
import HeaderAndHeroSection from "../components/HeaderAndHeroSection2";
import RequestInviteSection from "../components/InviteSection";

// Custom hook to scroll to top on route change
function useScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

// ComingSoon component
function ComingSoon() {
  // Using the custom hook
  useScrollToTop();
  
  return (
    <div className="ComingSoon relative">
      <HeaderAndHeroSection />
      <RequestInviteSection />
      <Footer />
    </div>
  );
}

export default ComingSoon;
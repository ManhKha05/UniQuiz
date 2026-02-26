import NProgress from "nprogress";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TopLoadingBar () {
  const location = useLocation();
  NProgress.configure({ easing: 'ease', speed: 500 });

  useEffect(() => {
    NProgress.set(0.0);
    NProgress.set(0.4);
    NProgress.set(1.0);
    // NProgress.done();
  }, [location])
  
  return null;
}

export default TopLoadingBar;
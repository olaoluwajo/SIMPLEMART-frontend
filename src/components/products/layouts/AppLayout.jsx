import { Outlet, useLocation } from "react-router-dom";
import Header from "../../Header";
import { useEffect } from "react";
import Footer from "../../Footer";

function AppLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;

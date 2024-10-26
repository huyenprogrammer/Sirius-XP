import routeConfig from "constants/routeConfig";
import MainLayout from "Layout/MainLayout";
import NoLayout from "Layout/NoLayout";
import { useMemo } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const Layout = useMemo(
    () =>
      location.pathname === "/sign-in" || location.pathname === "/sign-up"
        ? NoLayout
        : MainLayout,
    [location.pathname]
  );

  return (
    <Layout>
      <Routes>
        {routeConfig.map((item) => (
          <Route key={item.path} path={item.path} element={item.component} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { OPRoutes } from "./OPRoutes";
import { useSelector } from "react-redux";

function App() {
  const l_Route = OPRoutes();
  const getAppStoreData = useSelector((state) => state.appstate.login_info);
  return (
    <>

      <Routes>
        {l_Route.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              element={
                item.isloggedin ? (getAppStoreData.isloggedin ? (item.element) : (
                  <Navigate to="/" />
                )
                ) : (item.element)
              }
            />
          );
        })}

      </Routes>
    </>
  );
}

export default App;
